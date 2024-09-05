const createIncomeService = require('../../services/income/CreateIncomeService')

async function handle(req,res)
{
    const {description, type, amount, date} = req.body
    //Adicionar userId do header posteriormente
    const {income} = await createIncomeService.execute()
}