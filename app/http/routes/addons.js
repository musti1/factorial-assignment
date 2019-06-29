const express = require('express')
const addonController = require('../controllers/AddonController')
const router = express.Router()

router.post('/getFactorial', addonController.getFactorial)

module.exports = router
