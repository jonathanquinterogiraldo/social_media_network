const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

//Mongo
mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://jonathanqgdev:Mybiwis1053@cluster0.we1qx.mongodb.net/test', { 
    useNewUrlParser: true ,
    useUnifiedTopology: true
});

mongoose.connection.on("error", (error) => console.log(error));
mongoose.connection.once("open", () => console.log("Mongoose conectado"));
