//Express
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

//Models
const UserModel = require('./models/user')

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

//Endpoints
app.post('/register', async (request, response) => {
    const  { name, first_lastname, second_lastname, email, password } = request.body
    const userExist = await UserModel.findOne({ email: email })

    if(!userExist){
        try {
            await UserModel.create({  name, first_lastname, second_lastname, email, password: await bcrypt.hash(password, 10) })    
            response.json({'created': true })    
        } catch (error) {    
            response.status(500).json({ error})
        }
    }else{
        response.json({ userExist: true })
    }    
})

app.post('/login', async (request, response) => {
    const { email, password } = request.body     
    const user = await UserModel.findOne({ email: email })

    if (user){    
        const match = await bcrypt.compare(password, user.password)
        if(match){
            response.json({ authenticated: true })
            return match ? user : null;
         }else{
            response.json({ wrongPassword: true })
         }              
    } else {
        response.json({ findUser: false })
    }                 
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))