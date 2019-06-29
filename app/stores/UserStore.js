const userModel = require('../db/models/userModel')
const User = require('./User')

class UserStore {

  /**
   *
   * @param emailId
   * @param password
   * @return {Promise<User|boolean>}
   */
  static async findByEmailAndPass (emailId, password) {
    try {
      const user = await userModel.findOne({ emailId: emailId, password: password }).exec()
      return User.createByObject(user)
    } catch (e) {
      return false
    }
  }

  /**
   *
   * @param {User} user
   * @return {Promise<User|boolean>}
   */
  static async add (user) {
    try {
      const userObj = await userModel.create(user.toObject())
      return User.createByObject(userObj)
    } catch (err) {
      return false
    }
  }

  /**
   *
   * @param {string} userId
   * @return {Promise<boolean>}
   */
  static async remove (userId) {
    try {
      await userModel.findOneAndDelete({ userId }).exec()
      return true
    } catch (err) {
      return false
    }
  }

  /**
   *
   * @param {User} user
   * @returns {Promise<boolean>}
   */
  static async update (user) {
    try {
      await userModel.findOneAndUpdate({ userId: user.userId }, user.toObject()).exec()
      return true
    } catch (err) {
      return false
    }
  }

}

module.exports = UserStore
