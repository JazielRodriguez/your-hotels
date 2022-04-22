const router = require('express').Router()
const authControllers = require('../controllers/auth-controllers')

router.get('/signup', authControllers.signUp)

module.exports = router
