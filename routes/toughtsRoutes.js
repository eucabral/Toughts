const express = require('express')
const Tought = require('../models/Tought')
const router =express.Router()
//controller
const ToughtController = require('../controllers/toughtController')
//helpers
const checkAuth = require('../helpers/auth').checkAuth

router.get('/add',checkAuth, ToughtController.createTought)
router.post('/add',checkAuth, ToughtController.createToughtSave)
router.get('/edit/:id',checkAuth, ToughtController.updateTought)
router.post('/edit/',checkAuth, ToughtController.updateToughtSave)
router.get('/dashboard',checkAuth, ToughtController.dashboard)
router.post('/remove',checkAuth,ToughtController.removeTought)
router.get('/',ToughtController.showToughts)

module.exports = router