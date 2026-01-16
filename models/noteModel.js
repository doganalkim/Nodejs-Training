const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

class NoteModel {
    async create(noteContent) {
        try {
            const user_id = uuidv4(), note_id = uuidv4();
            const sql = 'INSERT INTO notes (user_id, note_id, note) VALUES(?,?,?)'
            await db.query(sql, [user_id, note_id, noteContent]);
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
            return rows;
        } catch(error) {
            throw new Error('Something gone wrong!');
        }
    }

    async deleteNote(id) {
        try {
            const sql = 'DELETE FROM notes WHERE note_id=?';
            await db.query(sql, [id]);
        } catch(error) {
            throw new Error('Something gone wrong!');
        }
    }

    async updateNote(note_id, note_content) {
        try {
            const sql = 'UPDATE notes SET note=? WHERE note_id=?';
            await db.query(sql, [note_content, note_id]);
        } catch(error) {
            throw new Error('Something gone wrong! ' + error);
        }
    }
}

module.exports = new NoteModel();