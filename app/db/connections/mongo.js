const mongoose = require('mongoose')
const mongodbConfig = require('../../config/database').connections.mongodb

mongoose.connect(`mongodb+srv://${mongodbConfig.username}:${mongodbConfig.password}@${mongodbConfig.host}/${mongodbConfig.database}`, { useNewUrlParser: true }).then(res => console.log('MongoDB Connected'))

module.exports = mongoose
