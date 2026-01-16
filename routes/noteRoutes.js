const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const { authenticateToken, requireRole } = require('../middleware/authMiddleware');

router.get('/', authenticateToken, requireRole(['admin']), noteController.getAllNotes.bind(noteController));
router.get('/:id', noteController.getNoteById.bind(noteController));
router.post('/createNote', noteController.createNote.bind(noteController));
router.delete('/deleteNote/:id', noteController.deleteNote.bind(noteController));
router.put('/updateNote/:id', noteController.updateNote.bind(noteController));

module.exports = router;