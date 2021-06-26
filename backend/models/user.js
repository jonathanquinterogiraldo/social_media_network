const mongoose = require('./database')

const UserSchema = mongoose.Schema({
    name: String,
    last_name: String,
    second_lastname: String,
    email: String,
    password: String
})

const UserModel = mongoose.model('User', UserSchema)

module.exports =  UserModel
        
    