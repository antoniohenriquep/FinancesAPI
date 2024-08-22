require('dotenv').config()
const {compare} = require('bcryptjs')
const User = require('../../models/User')
const { sign } = require('jsonwebtoken')

async function execute({email, password})
{
    //Busca o usuario pelo email
    const user = await User.findOne({where:{email}})

    //Caso um usuario nao seja encontrado
    if(!user)
    {
        throw new Error("Incorrect user or password")
    }

    //Compara a senha inserida com a senha hasheada salva no banco
    const passwordMatch = await compare(password, user.password)

    //Caso as senhas nao coincidam
    if(!passwordMatch)
    {
        throw new Error("Incorrect user or password")
    }

    //Assina um JSON Web Token para a autenticacao
    const token = sign(
        //Payload contendo email e nome do usuario
        {
            name: user.name,
            email:user.email
        },
        //Chave de assinatura do token
        process.env.JWT_SECRET,

        //Opcoes
        {
            subject:JSON.stringify(user.id), //Identificador unico do usuario
            expiresIn:'10d' //Tempo de expiracao do token
        }
    )
    console.log(user.id)

    return {
        id:user.id,
        name:user.name,
        email:user.email,
        token
    }
}

module.exports = {execute}