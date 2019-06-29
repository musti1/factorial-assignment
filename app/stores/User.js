const uuid = require('uuid/v1')

class User {
  constructor (userId, userName, emailId, userPassword) {
    this.userId = userId
    this.name = userName
    this.emailId = emailId
    this.password = userPassword
  }

  static createByDetails (name, emailId, password) {
    return new User(uuid(), name, emailId, password)
  }

  static createByObject (userObject) {
    return new User(userObject.userId, userObject.name, userObject.emailId, userObject.password)
  }

  toObject () {
    return JSON.parse(JSON.stringify(this))
  }

}

module.exports = User
