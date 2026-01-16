const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

class NoteModel {
    async create(user_id, noteContent) {
        try {
            const note_id = uuidv4();
            const sql = 'INSERT INTO notes (user_id, note_id, note) VALUES(?,?,?)'
            const [result] = await db.query(sql, [user_id, note_id, noteContent]);

            if(result.affectedRows < 1) {
                return "Failed!";
            }
            
            return "Succedded!";
        } catch(error) {
            throw new Error('Something gone wrong!');
        }
    }

    async getAllNotes() {
        try {
            const sql = 'SELECT * FROM notes';
            const [rows] = await db.query(sql);
            return rows;
        } catch(error) {
            throw new Error('Something gone wrong!');
        }
    }

    async getNoteById(id) {
        try {
            const sql = 'SELECT * FROM notes WHERE note_id=?';
            const [rows] = await db.query(sql,[id]);
            return rows[0];
        } catch(error) {
            throw new Error('Something gone wrong!');
        }
    }

    async deleteNote(id) {
        try {
            const sql = 'DELETE FROM notes WHERE note_id=?';
            const [result] = await db.query(sql, [id]);

            if(result.affectedRows < 1) {
                return "Failed!";
            }
            
            return "Succedded!";
        } catch(error) {
            throw new Error('Something gone wrong!');
        }
    }

    async updateNote(note_id, note_content) {
        try {
            const sql = 'UPDATE notes SET note=? WHERE note_id=?';
            const [result] = await db.query(sql, [note_content, note_id]);

            if(result.affectedRows < 1) {
                return "Failed!";
            }
            
            return "Succedded!";
        } catch(error) {
            throw new Error('Something gone wrong! ' + error);
        }
    }

    async getMyNotes(user_id) {
        try {
            const sql = 'SELECT note_id, note FROM notes WHERE user_id=?';
            const [rows] = await db.query(sql, [user_id]);
            return rows;
        } catch(error) {
            throw new Error('Something gone wrong! ' + error);
        }
    }
}

module.exports = new NoteModel();