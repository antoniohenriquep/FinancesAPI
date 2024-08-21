require('dotenv').config()
const express = require('express')
const { sequelize } = require('./db/config')
const setupAssociations = require('./db/associations')
const routes = require('./routes')

const server = express()

server.use(express.json())

async function syncDatabase() {

    try {
        setupAssociations()
        await sequelize.sync()
        console.log("Banco de dados sincronizado.")
    } catch (error) {
        console.error("Erro ao sincronizar o banco de dados:", error)
    }
}

syncDatabase();

server.use('/', routes)

server.listen(process.env.PORT,()=>{console.log('ola mundo')})