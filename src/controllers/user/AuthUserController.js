const authUserService = require('../../services/user/AuthUserService')

async function handle(req,res)
{
    const {email,password} = req.body

    const auth = await authUserService.execute({email,password})
    res.json(auth)
}

module.exports = {handle}