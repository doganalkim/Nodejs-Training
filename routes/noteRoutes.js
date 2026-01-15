const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

router.get('/', noteController.getAllNotes.bind(noteController));
router.get('/:id', noteController.getNoteById.bind(noteController));
router.post('/createNote', noteController.createNote.bind(noteController));

module.exports = router;