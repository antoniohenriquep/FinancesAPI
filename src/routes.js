const express = require('express')
const routes = express.Router()
const createUserController = require('./controllers/user/CreateUserController')

routes.post('/register',createUserController.handle)

module.exports = routes