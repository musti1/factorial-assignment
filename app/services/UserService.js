const UserStore = require('../stores/UserStore')
const User = require('../stores/User')

class UserService {
  /**
   *
   * @param email
   * @param password
   * @return {Promise<User|boolean>}
   */
  static async getUser (email, password) {
    return UserStore.findByEmailAndPass(email, password)
  }

  /**
   *
   * @param name
   * @param email
   * @param password
   * @return {Promise<boolean>}
   */
  static async newUser (name, email, password) {

    const user = User.createByDetails(name, email, password)
    return UserStore.add(user)

  }

  /**
   *
   * @param userObj
   * @return {Promise<boolean>}
   */
  static async updateUserDetails (userObj) {
    const user = User.createByObject(userObj)
    return UserStore.update(user)

  }

  /**
   *
   * @param {string} userId
   * @return {Promise<boolean>}
   */
  static async deactivateUser (userId) {
    return UserStore.remove(userId)
  }
}

module.exports = UserService
