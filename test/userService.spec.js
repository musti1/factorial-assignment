const mongoose = require('mongoose')
const sinon = require('sinon')
const { describe, it, before, after } = require('mocha')
const { expect } = require('chai')
const User = require('../app/stores/User')
const UserStore = require('../app/stores/UserStore')
const UserService = require('../app/services/UserService')

const testUserObj = {
  userId: '1212',
  name: 'abc',
  email: 'abc@abc.com',
  password: 'abc'
}

describe('User Service', function () {

  after(function () {
    mongoose.disconnect(function () {
      console.log('db conn cleared')
    })
  })

  describe('getUser', function () {

    before('attach stubs', function () {
      const stub = sinon.stub(UserStore, 'findByEmailAndPass')
      stub.onCall(0).resolves(User.createByObject(testUserObj))
      stub.onCall(1).resolves(false)
    })
    after('restore', function () {
      sinon.restore()
    })

    it('should return user upon success', async function () {
      const user = await UserService.getUser('user', 'pass')
      expect(user).to.be.an.instanceOf(User)
    })

    it('should return false upon error', async function () {
      const user = await UserService.getUser('user', 'pass')
      expect(user).to.be.equal(false)
    })
  })

  describe('deactivateUser', function () {

    before('attach stubs', function () {
      const stub = sinon.stub(UserStore, 'remove')
      stub.onCall(0).resolves(true)
      stub.onCall(1).resolves(false)
    })
    after('restore', function () {
      sinon.restore()
    })

    it('should return user upon success', async function () {
      const user = await UserService.deactivateUser(testUserObj.userId)
      expect(user).to.be.equal(true)
    })

    it('should return false upon error', async function () {
      const user = await UserService.deactivateUser(testUserObj.userId)
      expect(user).to.be.equal(false)
    })
  })

  describe('updateUserDetails', function () {
    before('attach stubs', function () {
      const stub = sinon.stub(UserStore, 'update')
      stub.onCall(0).resolves(true)
      stub.onCall(1).resolves(false)
    })
    after('restore', function () {
      sinon.restore()
    })

    it('should return user upon success', async function () {
      const user = await UserService.updateUserDetails(testUserObj)
      expect(user).to.be.equal(true)
    })

    it('should return false upon error', async function () {
      const user = await UserService.updateUserDetails(testUserObj)
      expect(user).to.be.equal(false)
    })
  })

})
