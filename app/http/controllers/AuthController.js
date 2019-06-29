const UserService = require('../../services/UserService')

class AuthController {

  static async signIn (req, res) {
    const user = await UserService.getUser(req.body.email, req.body.password)
    if (user) {
      return res.json({ user, message: 'Sign In Successful' })
    } else {
      return res.json({ error: 'Unable to login user' })
    }
  }

  static async signUp (req, res) {
    const { name, email, password } = req.body
    const User = await UserService.newUser(name, email, password)
    if (User) {
      return res.json({ User, message: 'Sign Up Successful' })
    } else {
      return res.json({ error: 'Failed to sign up' })
    }
  }

}

module.exports = AuthController
