const mongoose = require('./database')

const UserSchema = mongoose.Schema({
    name: String,
    first_lastname: String,
    second_lastname: String,
    nickname: String,
    email: String,
    password: String
})

const UserModel = mongoose.model('User', UserSchema)

module.exports =  UserModel
        
    