const uuid = require('uuid/v1');

class Users {
    constructor(userId, userName, emailId,  userPassword){
        this.userId = userId;
        this.name = userName;
        this.emailId = emailId;
        this.password = userPassword;
    }

    toObject(){
        return JSON.parse(JSON.stringify(this));
    }

    static createByDetails(name, emailId, password){
        return new Users(uuid(), name, emailId, password);
    }

    static createByObject(userObject){
        return new Users(userObject.userId, userObject.name, userObject.emailId, userObject.password);
    }


}

module.exports = Users;
