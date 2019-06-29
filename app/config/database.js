require('dotenv').config()
const env = require('common-env')()
const config = {
  connections: {
    mongodb: {
      host: env.getOrElse('MONGODB_HOST', '127.0.0.1'),
      port: env.getOrElse('MONGODB_PORT', '27017'),
      username: env.getOrElse('MONGODB_USER', ''),
      password: env.getOrElse('MONGODB_PASS', '')
    }
  },
  connection: env.getOrElse('DATABASE_CONNECTION', 'mongodb'),
  database: env.getOrElse('DATABASE', 'testApp')
}

module.exports = config
