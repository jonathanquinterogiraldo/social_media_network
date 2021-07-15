//ENV variables
require('dotenv').config();

//Require
const express = require('express')
const db = require('./database')
const userRouter = require('../backend/routes/user')
const postRouter = require('../backend/routes/post')
const cors = require('cors')

//Express
const app = express()
const PORT = process.env.PORT

//Database
db()

//Middlewares
app.use(express.json())
app.use(cors())

//Routes
app.use('/users', userRouter)
app.use('/posts', postRouter)

//Express initialization
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})


