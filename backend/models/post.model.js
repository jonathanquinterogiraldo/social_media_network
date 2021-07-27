const { Schema, model } = require('mongoose')

const PostSchema = Schema({
  content: String,
  date_created: Date  
})

const PostModel = model('Post', PostSchema)

module.exports = PostModel