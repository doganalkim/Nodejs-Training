const noteService = require('../services/noteService');

class NoteController {
    async getAllNotes(req, res) {
        try {
            const data = await noteService.getAllNotes();
            res.json({success: true, data: data});
        } catch(error) {
            res.status(500).json({success: false, error: "Cannot list notes!"});
        }
    }

    async getNoteById(req, res) {
        try {
            const data = await noteService.getNoteById(req);
            res.json({success: true, data: data});
        } catch(error) {
            res.status(500).json({success: false, error: "Cannot list notes!"});
        }
    }

    async createNote(req, res) {
        try {
            const details = await noteService.createNote(req.user.user_id, req.body.noteContent);
            res.json({success: details});
        } catch(error) {
            console.log(error);
            res.status(500).json({success: false, error: "Couldn't create a note!"});
        }
    }

    async deleteNote(req, res) {
        try {
            const details = await noteService.deleteNote(req);
            res.json({success: details});
        } catch(error) {
            console.log(error);
            res.status(500).json({success: false, error: "Couldn't  delete a note!"});
        }
    }

    async updateNote(req, res) {
        try {
            const details = await noteService.updateNote(req);
            res.json({success: details});
        } catch(error) {
            console.log(error);
            res.status(500).json({success: false, error: "Couldn't  update a note!"});
        }
    }

    async getMyNotes(req, res) {
        try {
            const data = await noteService.getMyNotes(req.user.user_id);
            res.json({success: true, data: data});
        } catch(error) {
            console.log(error);
            res.status(500).json({success: false, error: "Couldn't fetch notes!"});
        }
    }
}

module.exports = new NoteController();