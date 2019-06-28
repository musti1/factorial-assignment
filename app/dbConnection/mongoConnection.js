const mongoose = require('mongoose');
const mongodbConfig = require('../../config/database').connections.mongodb;
mongoose.connect(`mongodb://${mongodbConfig.host}:${mongodbConfig.port}/${mongodbConfig.database}`, {useNewUrlParser: true}).then(res => console.log("MongoDB Connected"));

module.exports = mongoose;
