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

}

module.exports = new NoteModel();