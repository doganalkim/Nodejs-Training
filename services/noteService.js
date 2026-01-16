const noteModel = require('../models/noteModel');

class noteService {

    async createNote(user_id, noteContent) {
        if(noteContent == '' || noteContent === '') {
            throw new Error('Note cannot be empty!');
        }

        return await noteModel.create(user_id, noteContent);
    }

    async getAllNotes() {
        return await noteModel.getAllNotes();
    }

    async getNoteById(req) {
        const id = req.params.id;
        if(id === '' || id === '' ||  id === null) {
            throw new Error('ID cannot be empty!');
        }

        await this.checkPermissions(req.user, id);

        return await noteModel.getNoteById(id);
    }

    async deleteNote(req) {
        const id = req.params.id;
        if(id === '' || id === '' ||  id == null) {
            throw new Error('ID cannot be empty!');
        }

        await this.checkPermissions(req.user, id);

        return await noteModel.deleteNote(id);
    }

    async checkPermissions(user, id) {
        const note = await noteModel.getNoteById(id);

        if((user.role != 'admin') && (user.user_id != note.user_id)) {
            throw new Error('Unauthorized!');
        }

        return true;
    }

    async updateNote(req) {
        const note_id = req.params.id, note_content = req.body.noteContent;
        if(note_id == '' || note_id === '' || note_id == null ||
           note_content == '' || note_content === '' || note_content == null
        ) {
            throw new Error('ID cannot be empty!');
        }

        await this.checkPermissions(req.user, note_id);

        return await noteModel.updateNote(note_id, note_content);
    }

    async getMyNotes(user_id) {
        return await noteModel.getMyNotes(user_id);
    }
}

module.exports = new noteService();