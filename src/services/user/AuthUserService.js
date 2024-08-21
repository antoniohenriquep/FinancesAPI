const {compare} = require('bcryptjs')
const User = require('../../models/User')

async function execute({email, password})
{
    const user = await User.findOne({where:{email}})

    if(!user)
    {
        throw new Error("Incorrect user or password")
    }

    const passwordMatch = await compare(password, user.password)
}