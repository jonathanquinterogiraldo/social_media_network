//Express
const express = require('express')
const app = express()

//Variables 
require('dotenv').config();

const PORT = process.env.PORT

//Models
const UserModel = require('./models/user')

const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const cookieSession = require('cookie-session');
const { request, response } = require('express')

app.use(bodyParser.json())

app.use(
    cookieSession({
        secret: 'twittor-session',
        maxAge: 5 * 60 * 1000
    })
)

//Endpoints
app.post('/register', async (request, response) => {
    const  { name, first_lastname, second_lastname, nickname, email, password } = request.body
    const userExist = await UserModel.findOne({ email })

    if(!userExist){
        try {
            await UserModel.create({  name, first_lastname, second_lastname, nickname, email, password: await bcrypt.hash(password, 10) })    
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
            req.session.userId = user._id;
            response.json({ authenticated: true })
            return match ? user : null;
         }else{
            response.json({ wrongPassword: true })
         }              
    } else {
        response.json({ findUser: false })
    }                 
})


app.get('/logout', async (request, response) => {
    request.session.userId = null;
    response.json({ endSession: true })   
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))