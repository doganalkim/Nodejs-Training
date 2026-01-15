const noteService = require('../services/noteService');

class NoteController {
    async getAllNotes(req, res) {
        try {
            // TO DO
            res.json({success: true, details: 'TO DO'});
        } catch(error) {
            res.status(500).json({success: false, error: "Cannot list notes!"});
        }
    }

    async getNoteById(req, res) {
        try {
            // TO DO
            res.json({success: true, details: 'TO DO'});
        } catch(error) {
            res.status(500).json({success: false, error: "Cannot list notes!"});
        }
    }

    async createNote(req, res) {
        try {
            // TO DO
            const response = await noteService.createNote(req.body.noteContent);
            res.json({success:true, details: response});
        } catch(error) {
            console.log(error);
            res.status(500).json({success: false, error: "Couldn't create a note!"});
        }
    }
}

module.exports = new NoteController();