const express = require('express')
const createUserController = require('./controllers/user/CreateUserController')
const authUserController = require('./controllers/user/AuthUserController')
const isAuthenticated = require('./middlewares/isAthenticated')

const routes = express.Router()

//Registro e login
routes.post('/register',createUserController.handle)
routes.post('/login',authUserController.handle)

//Fonte de renda
routes.post('/income', isAuthenticated, (req,res)=>{
    res.json({ok:'true'})
})



module.exports = routes