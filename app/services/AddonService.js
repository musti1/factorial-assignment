const addon = require('../../build/Release/addon')

class AddonService {
  /**
   *
   * @param {int} number
   * @return {Promise<int>}
   */
  static async getFactorial (number) {
    return addon.factorial(number)
  }
}

module.exports = AddonService
