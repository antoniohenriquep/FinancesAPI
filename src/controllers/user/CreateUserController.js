const createUserService = require('../../services/user/CreateUserService')

async function handle(req,res)
{
    const {name, email, password} = req.body 
    const user = await createUserService.execute({name, email, password})
    return res.json(user)
}

module.exports = {handle}