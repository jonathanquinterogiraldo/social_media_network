const { Schema, model } = require('mongoose')

const UserSchema = Schema({
    name: String,
    first_lastname: String,
    second_lastname: String,
    nickname: String,
    email: String,
    password: String
})

const UserModel = model('User', UserSchema)

module.exports =  UserModel
        
    