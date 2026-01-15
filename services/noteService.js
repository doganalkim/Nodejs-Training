const noteModel = require('../models/noteModel');

class noteService {

    async createNote(noteContent){
        if(noteContent == '' || noteContent === '') {
            throw new Error('Note cannot be empty!');
        }

        return await noteModel.create(noteContent);
    }
}

module.exports = new noteService();