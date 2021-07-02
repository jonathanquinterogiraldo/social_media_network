//ENV variables
require('dotenv').config();

//Require
const express = require('express')
const cookieSession = require('cookie-session');
const db = require('./database')
const userRouter = require('../backend/routes/user')

//Express
const app = express()
const PORT = process.env.PORT

//Database
db()

//Midlewares
app.use(express.json())

app.use(
    cookieSession({
        secret: 'twittor-session',
        maxAge: 5 * 60 * 1000
    })
)

//Routes
app.use('/users', userRouter)

//Express initialization
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

