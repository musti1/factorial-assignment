const mongoose = require('../connections/mongo')

const userSchema = mongoose.Schema({
  name: { type: String },
  userId: { type: String },
  password: { type: String },
  emailId: { type: String }
})

module.exports = mongoose.model('users', userSchema)

