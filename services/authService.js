const authModel = require('../models/authModel');

class AuthService {

    async getUsers() {
        return await authModel.getUsers();
    }

    async register(username, password) {
        if(username == null || username == '' ||
            password == null || password == ''
        ) {
            throw new Error('Username or password cannot be empty!');
        }

        return await authModel.register(username, password);
    }

    async login(username, password) {
        return await authModel.login(username, password);
    }
}

module.exports = new AuthService();