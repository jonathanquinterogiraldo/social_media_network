const postController = require('../controllers/post.controller')
const router = require('express').Router()

router.route('/post').post(postController.post)
router.route('/posts').get(postController.posts)

module.exports = router