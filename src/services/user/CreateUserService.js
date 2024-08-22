const { hash } = require("bcryptjs");
const User = require("../../models/User");

async function execute({name,email,password})
{
    //Caso algumas das informacoes nao sejam preenchidas, o cadastro nao prosseguira
    if(!email || !name || !password)
    {
        throw new Error("Missing informations!")
    }

    //Caso o usuario tente cadastrar uma conta com um email ja em uso
    const userAlreadyExists = await User.findOne({where:{email}})

    if(userAlreadyExists)
    {
        throw new Error("This account already exists!");
    }
    
    //Criptografando senha para armazenar no banco
    const hashedPassword = await hash(password,10)

    //Criando o usuario e salvando no banco
    const newUser = await User.create({
        name,
        email,
        password: hashedPassword
    })

    //Filtrando informacoes a serem retornadas pela API
    const user = {
        id: newUser.id,
        name,
        email
    }

    return user
}

module.exports = {execute}