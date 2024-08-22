require('jsonwebtoken').config()
const { verify } = require("jsonwebtoken");

function isAuthenticated(req,res,next){

    //Recebe o token passado no cabecalho da requisicao
    const authToken = req.headers.authorization

    //Caso nao haja token, o acesso sera negado
    if(!authToken)
    {
        return res.status(401).end()
    }

    /*A string enviada recebida no cabecalho é "Bearer 'token'".
    A primeira parte eh  dispensavel, entao usa-se split com desestruturacao para separar apenas o token
    */
    const [, token] = authToken.split(" ")

    try {
        //Verifica se o token foi assinado com a chave especificada, para evitar fraudes
        const {sub} = verify(token, process.env.JWT_SECRET) //Devolve o subject do token, nesse caso: o id.

        req.user_id = sub //Define um campo na requisicao para armazenar o id
        next()
    } catch (error) {
        return res.status(401).end()
    }

}

module.exports = isAuthenticated