const { response } = require('express')
const express = require('express')

const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

const UserModel = require('./models/user')
//Express
const app = express()
const PORT = process.env.PORT || 3000

//Mongo
const database = require('./models/database')

app.use(bodyParser.json())


// UserSchema.statics.authenticate = async (email, password) => {
//     const useer = await this.model("User")


// }

// app.post('/login', async (require, response) => {
//     const { email, password } = require.body

//     const user = await UserModel.authenticate(email, password)
//     if(user){
//         require.session.userId = user.userId
//         response.redirect('/')
//     }
//     response.redirect('/login')

// })

app.post('/register', async (request, response) => {

    const  { name, first_lastname, second_lastname, email, password } = request.body

    try {
        await UserModel.create({  name, first_lastname, second_lastname, email, password })    

        console.log ({ name, first_lastname, second_lastname, email, password })
    
        response.json({'created': true })

    } catch (error) {
        response.status(500).json({ error})
    }

   
    // const { name, firt_lastname, second_lastname, email, password } = require.body


    // user.save(async (error) => {
    //     if(error){
    //         console.log(error)
    //         return
    //     }
    //     console.log("User created")
    // })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))