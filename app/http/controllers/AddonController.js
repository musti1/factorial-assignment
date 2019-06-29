const AddonService = require('../../services/AddonService')

class AddonController {

  static async getFactorial (req, res) {
    const { number } = req.body
    if (Number.isNaN(Number.parseInt(number, 10))) {
      return res.json({ factorial: 'Not an integer' })
    }
    const factorial = await AddonService.getFactorial(Number.parseInt(number, 10))

    if (Number.isFinite(factorial)) {
      return res.json({ factorial })
    } else {
      return res.json({ factorial: 'Infinity' })
    }

  }
}

module.exports = AddonController
