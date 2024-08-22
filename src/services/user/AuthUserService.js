require('dotenv').config()
const {compare} = require('bcryptjs')
const User = require('../../models/User')
const { sign } = require('jsonwebtoken')

async function execute({email, password})
{
    const user = await User.findOne({where:{email}})

    if(!user)
    {
        throw new Error("Incorrect user or password")
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch)
    {
        throw new Error("Incorrect user or password")
    }

    const token = sign(
        {
            name: user.name,
            email:user.email
        },
        process.env.JWT_SECRET,
        {
            subject:toString(user.id),
            expiresIn:'10d'
        }
    )

    return {
        id:user.id,
        name:user.name,
        email:user.email,
        token
    }
}

module.exports = {execute}