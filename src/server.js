require('dotenv').config()
const express = require('express')
const { sequelize } = require('./db/config')

const server = express()
sequelize.sync()

server.get('/',(req,res)=>{
    res.send('ola mundo')
})

server.listen(process.env.PORT,()=>{console.log('ola mundo')})