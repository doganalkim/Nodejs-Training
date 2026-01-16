const noteModel = require('../models/noteModel');

class noteService {

    async createNote(noteContent) {
        if(noteContent == '' || noteContent === '') {
            throw new Error('Note cannot be empty!');
        }

        return await noteModel.create(noteContent);
    }

    async getAllNotes() {
        return await noteModel.getAllNotes();
    }

    async getNoteById(id) {
        if(id === '' || id === '' ||  id === null) {
            throw new Error('ID cannot be empty!');
        }

        return await noteModel.getNoteById(id);
    }

    async deleteNote(id) {
        if(id === '' || id === '' ||  id == null) {
            throw new Error('ID cannot be empty!');
        }

        return await noteModel.deleteNote(id);
    }

    async updateNote(note_id, note_content) {
        if(note_id == '' || note_id === '' || note_id == null ||
           note_content == '' || note_content === '' || note_content == null
        ) {
            throw new Error('ID cannot be empty!');
        }

        return await noteModel.updateNote(note_id, note_content);
    }
}

module.exports = new noteService();