const Income = require("../../models/Income");
const MonthlyBalance = require("../../models/MonthlyBalance");
const User = require("../../models/User");


async function execute({description, type, amount, date, userId})
{
    try {
        const user = await User.findByPk(userId)

        if(!user)
        {
            throw new Error("User not found")
        }

        //Caso a estrutura seja diferente de null, ela sera desestruturada

        const incomeDate = new Date(date)
        const year = incomeDate.getFullYear
        const month = incomeDate.getMonth() + 1
        
        //Checa se ja existe um MonthlyBalance referente ao periodo vigente
        let monthlyBalance = await MonthlyBalance.findOne({
            where:{
                userId: user.id,
                year,
                month
            }
        })

        //Caso nao exista, sera criado
        if(!monthlyBalance)
        {
            monthlyBalance = await MonthlyBalance.create({
                userId:user.id,
                year,
                month
            })
        }

        const newIncome = await Income.create({
            description,
            type,
            amount,
            date: type == 'variable' ? date : null, //So sera adicionada a data caso o tipo nao seja variavel
            userId: user.id
        })

        //Atualiza o total de Income de acordo com o tipo
        if(type == 'fixed')
        {
            monthlyBalance.totalFixedIncome += amount
        }
        else
        {
            monthlyBalance.totalVariableIncome += amount
        }

        //Calcula o novo balanco financeiro 
        monthlyBalance.balance = (monthlyBalance.totalFixedIncome + monthlyBalance.totalVariableIncome) - (monthlyBalance.totalFixedExpenses + monthlyBalance.totalVariableExpenses)

        await monthlyBalance.save()


    } catch (error) {
        
    }
}