//const bodyParser = require('body-parser')

//Express
const express = require('express')
const app = express()
const db = require('./database')

//Variables 
require('dotenv').config();
const PORT = process.env.PORT

const userRouter = require('../backend/routes/user')

db()

app.use(express.json())

app.use('/users', userRouter)



app.listen(PORT, () => console.log(`Listening on port ${PORT}`))