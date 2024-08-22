const Income = require("../../models/Income");
const User = require("../../models/User");


async function execute({descripition, type, amount, date, userId})
{
    try {
        const user = await User.findByPk(userId)

        if(!user)
        {
            throw new Error("User not found")
        }

        const incomeDate = new Date(date)
        const year = income

    } catch (error) {
        
    }
}