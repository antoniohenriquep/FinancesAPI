const express = require('express')
const createUserController = require('./controllers/user/CreateUserController')
const authUserController = require('./controllers/user/AuthUserController')

const routes = express.Router()


routes.post('/register',createUserController.handle)
routes.post('/login',authUserController.handle)

module.exports = routes