const userController = require('../controllers/user.controller')
const router = require('express').Router()

router.route('/register').post(userController.register)
router.route('/login').post(userController.login)
router.route('/logout').get(userController.logout)

module.exports = router