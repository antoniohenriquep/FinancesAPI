require('dotenv').config()
const express = require('express')
const { sequelize } = require('./db/config')
const setupAssociations = require('./db/associations')

const server = express()
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

server.get('/',(req,res)=>{
    res.send('ola mundo')
})

server.listen(process.env.PORT,()=>{console.log('ola mundo')})