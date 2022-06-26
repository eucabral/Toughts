const express = require('express')
const Tought = require('../models/Tought')
const router =express.Router()
//controller
const Authcontroller = require('../controllers/authController')

router.get('/login', Authcontroller.login)
router.post('/login', Authcontroller.loginPost)
router.get('/register', Authcontroller.register)
router.post('/register', Authcontroller.registerPost)
router.get('/logout', Authcontroller.logout)


module.exports = router