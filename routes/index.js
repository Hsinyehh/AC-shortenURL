const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const shortURL = require('./modules/shortURL')

router.use('/', home)
router.use('/shortURL', shortURL)



module.exports = router