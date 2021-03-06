require('dotenv').config()
const env = require('common-env')()

module.exports = {
  appName: env.getOrElse('APP_NAME', 'Factorial App'),
  appSecret: env.getOrElse('APP_SECRET', 'NewAppTestingFullTime'),
  port: env.getOrElse('SERVER_PORT', 3000)
}
