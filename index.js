//  import express
const express = require('express')

// import dotenv
require('dotenv').config()

// import cors
const cors = require('cors')

// import router
const router = require('./router')

// // import connection
require('./connection')

//  create server
const pfserver = express()

// server using cors
pfserver.use(cors())

// parse the data - returs middleware - parse the data
pfserver.use(express.json())

// use router
pfserver.use(router)

// exporting folder from server 
pfserver.use('/upload', express.static('./uploads'))

// set  port 
const PORT = 4000 || process.env.PORT

// listen
pfserver.listen(PORT, ()=>{
    console.log(`Server successfully running at the port number ${PORT}`);
    
})




// get 
// pfserver.get('/',(req, res)=>{
//     res.send('get request received')
// })


// post
// pfserver.post('/',(req,res)=>{
//     res.send('post request received')
// })


// put
// pfserver.put('/',(req,res)=>{
//     res.send('put request received')
// })


// delete
// pfserver.delete('/',(req,res)=>{
//     res.send('delete request received')
// })