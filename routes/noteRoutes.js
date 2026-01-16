const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const { authenticateToken, requireRole } = require('../middleware/authMiddleware');

router.get('/', authenticateToken, requireRole(['admin']), noteController.getAllNotes.bind(noteController));
router.get('/myNotes', authenticateToken,noteController.getMyNotes.bind(noteController));
router.get('/:id', authenticateToken, noteController.getNoteById.bind(noteController));
router.post('/createNote', authenticateToken, noteController.createNote.bind(noteController));
router.delete('/deleteNote/:id', authenticateToken, noteController.deleteNote.bind(noteController));
router.put('/updateNote/:id', authenticateToken, noteController.updateNote.bind(noteController));

module.exports = router;