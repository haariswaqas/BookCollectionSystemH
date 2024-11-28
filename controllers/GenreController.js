const Genre = require('../models/Genre');

// Get all genres
exports.getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single genre by ID
exports.getGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const genre = await Genre.findByPk(id);
    if (genre) {
      res.status(200).json(genre);
    } else {
      res.status(404).json({ message: 'Genre not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a genre
exports.createGenre = async (req, res) => {
  try {
    const genre = await Genre.create(req.body);
    res.status(201).json(genre);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a genre by ID
exports.updateGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Genre.update(req.body, { where: { id } });
    if (updated) {
      const updatedGenre = await Genre.findByPk(id);
      res.status(200).json(updatedGenre);
    } else {
      res.status(404).json({ message: 'Genre not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a genre by ID
exports.deleteGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Genre.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: 'Genre deleted successfully' });
    } else {
      res.status(404).json({ message: 'Genre not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
