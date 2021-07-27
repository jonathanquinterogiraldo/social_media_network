const userController = require('../controllers/user.controller')
const router = require('express').Router()
const { formData } = require('../utils/middlewares')

router.route('/register').post(formData, userController.register)
router.route('/login').post(userController.login)
router.route('/logout').get(userController.logout)

module.exports = router
