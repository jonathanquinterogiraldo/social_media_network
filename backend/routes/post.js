const postController = require('../controllers/post.controller')
const router = require('express').Router()
const { authorization } = require('../utils/middlewares')

router.route('/post').post(authorization, postController.post)
router.route('/posts').get(authorization, postController.posts)

module.exports = router