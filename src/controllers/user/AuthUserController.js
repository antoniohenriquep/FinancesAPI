const authUserService = require('../../services/user/AuthUserService')

async function handle(req,res)
{
    //Informacoes passadas pelo corpo da requisicao
    const {email,password} = req.body

    //Gerando a autenticacao com as info recebidas
    const auth = await authUserService.execute({email,password})
    
    res.json(auth)
}

module.exports = {handle}