const { Schema, model } = require('mongoose')

const UserSchema = Schema({
  name: String,
  lastname: String,
  nickname: String,
  email: String,
  password: String,
  image_url: String
})

const UserModel = model('User', UserSchema)

module.exports = UserModel

