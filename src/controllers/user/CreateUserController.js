const createUserService = require('../../services/user/CreateUserService')

async function handle(req,res)
{
    //Recebendo info pelo corpo da requisicao
    const {name, email, password} = req.body
    
    //Criando usuario no banco 
    const user = await createUserService.execute({name, email, password})
    
    return res.json(user)
}

module.exports = {handle}