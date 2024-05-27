const express = require('express')
const server = express()

server.get('/',(req,res)=>{
    res.send('ola mundo')
})

server.listen(5000,()=>{console.log('ola mundo')})