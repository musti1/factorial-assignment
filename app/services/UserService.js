const UserStore = require('../stores/UserStore');
const User = require('../stores/User');

class UserService {
    /**
     *
     * @param email
     * @param password
     * @return {Promise<boolean|boolean|Array|*|Binary|{}|Map>}
     */
    static async getUser(email, password) {
        try {
            return await UserStore.get(email, password);
        } catch (e) {
            return false;
        }
    }

    /**
     *
     * @param name
     * @param email
     * @param password
     * @return {Promise<boolean|Promise<boolean>>}
     */
    static async newUser(name, email, password) {
        try {
            const user = User.createByDetails(name, email, password);
            return await UserStore.add(user);
        } catch (e) {
            return false;
        }
    }

    /**
     *
     * @param body
     * @return {Promise<boolean>}
     */
    static async updateUserDetails(body) {
        try {
            const userItem = User.createByObject(body);
            return await UserStore.update(userItem);
        } catch (e) {
            return false;
        }
    }

    /**
     *
     * @param body
     * @return {Promise<boolean>}
     */
    static async deactivateUser(body) {
        try {
            const userItem = User.createByObject(body);
            return await UserStore.remove(userItem);
        } catch (e) {
            return false;
        }

    }
}

module.exports = UserService;
