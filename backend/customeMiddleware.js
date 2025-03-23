const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log(`hiii i m middleware ${req.method}  ${req.url}`)
    next()
})



app.get('/',(req,res)=>{
    res.send("hii this is the first APi")
    
})

app.get('/about',(req,res)=>{
    res.send("hi wlecome to the about page")
})


app.listen(4000,()=>{

    console.log('server is running')

})


