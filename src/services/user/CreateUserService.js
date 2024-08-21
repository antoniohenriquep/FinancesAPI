const { hash } = require("bcryptjs");
const User = require("../../models/User");

async function execute({name,email,password})
{
    if(!email || !name || !password)
    {
        throw new Error("Missing informations!")
    }

    const userAlreadyExists = await User.findOne({where:{email}})

    if(userAlreadyExists)
    {
        throw new Error("This account already exists!");
    }
    
    const hashedPassword = await hash(password,10)

    await User.create({
        name,
        email,
        password: hashedPassword
    })

    const user = {
        name,
        email
    }

    return user
}

module.exports = {execute}