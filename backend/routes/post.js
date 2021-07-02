const postController = require('../controllers/post.controller')
const router = require('express').Router()

router.route('/post').post(postController.post)

module.exports = router