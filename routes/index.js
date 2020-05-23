const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const records = require('./modules/records')
const users = require('./modules/users')
const auth = require('./modules/auth')

router.use('/', home)
router.use('/records', records)
router.use('/users', users)
router.use('/auth', auth)

module.exports = router
