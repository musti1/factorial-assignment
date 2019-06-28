const UserService = require('../services/UserService');

class AuthController {

    /**
     *
     * @param req
     * @param res
     * @return {Promise<*|Promise<any>>}
     */
    static async signIn(req, res) {
        const user = await UserService.getUser(req.body.email, req.body.password);
        if(user){
            return res.json({user, message: "Sign In Successful"});
        }else{
            return res.json({error: "Unable to login user"});
        }
    }

    /**
     *
     * @param req
     * @param res
     * @return {Promise<*|Promise<any>>}
     */
    static async signUp(req, res) {
        const addUser = await UserService.newUser(req.body.name, req.body.email, req.body.password);
        if (addUser) {
            const user = await UserService.getUser(req.body.email, req.body.password);
            return res.json({user, message: "Sign Up Successful"});
        } else {
            return res.json({error: "Failed to sign up"});
        }
    }

}

module.exports = AuthController;
