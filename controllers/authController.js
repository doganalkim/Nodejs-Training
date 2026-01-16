const authService = require('../services/authService');

class AuthController {
    async getUsers(req, res) {
        try {
            const data = await authService.getUsers();
            res.json({success: true, data: data});
        } catch(error) {
            res.status(500).json({success: false, error: "Cannot register user!" + error});
        }
    }

    async register(req, res) {
        try {
            const userName = req.body.username, password = req.body.password;
            const details = await authService.register(userName, password);
            res.json({success: details});
        } catch(error) {
            res.status(500).json({success: false, error: "Cannot register user!" + error});
        }
    }

    async login(req, res) {
        try {
            const userName = req.body.username, password = req.body.password;
            const token = await authService.login(userName, password);
            res.json({success: true, token: token});
        } catch(error) {
            res.status(500).json({success: false, error: "Cannot register user!" + error});
        }
    }
}

module.exports = new AuthController();