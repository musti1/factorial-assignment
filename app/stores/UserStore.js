const mongoose = require('../dbConnection/mongoConnection');
const Users = require('./User');

const userSchema = mongoose.Schema({
    name: {type: String},
    userId: {type: String},
    password: {type: String},
    emailId: {type:String}
});

const userModel = mongoose.model('users', userSchema);

class UserStoreMongo {

    /**
     *
     * @param emailId
     * @param password
     * @return {Promise<boolean|Array|*|Binary|{}|Map|Map>}
     */
    static async get(emailId, password) {
        try {
            const user = await userModel.findOne({emailId: emailId, password: password}).exec();
            return user.toObject();
        } catch (e) {
            return false;
        }
    }

    /**
     *
     * @param user
     * @return {Promise<boolean>}
     */
    static async add(user) {

        try {
            await userModel.create(user.toObject());
            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     *
     * @param user
     * @return {Promise<boolean>}
     */
    static async remove(user) {
        try {
            await userModel.findOneAndDelete({userId: user.userId}).exec();
            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     *
     * @param {Users} user
     * @returns {Promise<boolean>}
     */
    static async update(user) {
        try {
            await userModel.findOneAndUpdate({userId: user.userId}, user.toObject()).exec();
            return true;
        } catch (err) {
            return false;
        }
    }

}

module.exports = UserStoreMongo;
