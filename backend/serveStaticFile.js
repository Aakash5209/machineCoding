const express = require('express')

const path = require('path')

const app = express()

console.log(__dirname)

app.use(express.static(path.join(__dirname,'public')))

app.get('/xyz',(req,res)=>{
    res.send("welcome to the node js server")
})

app.get('/indexFile',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','/index.html'))

})


app.get('/aboutFile',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','/about.html'))

})






app.listen(5000,()=>{
    console.log(' server is  running ')
})