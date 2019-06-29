const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const authRouter = require('./routes/auth')
const addonRouter = require('./routes/addons')

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api', authRouter)
app.use('/api', addonRouter)

module.exports = app
