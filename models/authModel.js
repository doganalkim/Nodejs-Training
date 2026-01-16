const db = require('../config/db');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');

class AuthModel {
    static get JWT_SECRET() {
        return process.env.JWT_SECRET;
    }

    async getUsers() {
        try {
            const sql = 'SELECT user_name, role FROM users';
            const [rows] = await db.query(sql);

            return rows; 
        } catch(error) {
            throw new Error('Something gone wrong!');
        }
    }

    async register(username, password) {
        try {
            const user_id = uuidv4(), role = 'user';

            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const sql = 'INSERT INTO users (user_id, user_name, password_hash, role) VALUES(?,?,?,?)'
            const [result] = await db.query(sql, [user_id, username, hashedPassword, role]);

            if(result.affectedRows < 1) {
                return "Failed!";
            }
            
            return "Succedded!";
        } catch(error) {
            throw new Error('Something gone wrong!');
        }
    }

    async login(username, password) {
        try {
            const sql = 'SELECT user_id, user_name, password_hash, role FROM users WHERE user_name=?';
            const [rows] = await db.query(sql, [username]);

            if(rows.length == 0) {
                throw new Error("User not found!");
            }

            const user = {
                user_id : rows[0].user_id,
                user_name: rows[0].user_name,
                role: rows[0].role
            }
            
            const isMatch = await bcrypt.compare(password, rows[0].password_hash);
    
            if (!isMatch) {
                throw new Error("Invalid Credentials!");
            }

            const token = jwt.sign(user, AuthModel.JWT_SECRET, { expiresIn: '1h'});
            return token; 
        } catch(error) {
            throw new Error('Something gone wrong!' + error);
        }
    }
}

module.exports = new AuthModel();