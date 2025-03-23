const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

// mongo connection
mongoose.connect('mongodb://localhost:27017/userDB')
    .then(() => console.log('mongo is connect'))
    .catch((err) => console.log('mongo not connected', err))


// create schema

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    age: { type: Number }
})

// create a model

const User = mongoose.model('User', userSchema)



// app.get('/',(req,res)=>{
//     res.send("server is running")
// })


// post- create a new user 

app.post('/user', async (req, res) => {

    try {
        console.log(req.body)
        const user = new User(req.body)
        const savedUser = await user.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }



})

app.get('/user', async (req, res) => {


    try {
        const user = await User.find()
        res.json(user)
    }
    catch (err) {
        res.status(500).json({ error: err.message })

    }


})


app.put('/user/:id', async (req, res) => {
    try {
        console.log("----->",req.body)
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}

        )
        if(updateUser){
            res.json(updateUser)
        }
        else{
            res.status(404).json({error:"user not found"})
        }
    }
   
    catch(err){
        res.status(400).json({error:err.message})

    }
})

app.delete('/user/:id',async(req,res)=>{
    try{
       const deleteUser = await User.findByIdAndDelete(req.params.id)
       if(deleteUser){
        res.json(deleteUser)
    }
    else{
        res.status(404).json({error:"user not found"})
    }
    } catch(err){
        res.status(400).json({error:err.message})

    }
        
})

app.listen(3000, () => {
    console.log("server is running")
})