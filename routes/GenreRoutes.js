const express = require('express');
const router = express.Router();
const GenreController = require('../controllers/GenreController');

router.get('/', GenreController.getAllGenres);
router.get('/:id', GenreController.getGenre);
router.post('/', GenreController.createGenre);
router.put('/:id', GenreController.updateGenre);
router.delete('/:id', GenreController.deleteGenre);

module.exports = router;
