const express = require('express');
const cors = require('cors'); // Import CORS middleware
const app = express();
require('dotenv').config();
const sequelize = require('./database');
const BookRoutes = require('./routes/BookRoutes');
const GenreRoutes = require('./routes/GenreRoutes');

// Middleware
app.use(cors()); // Allow CORS for all origins
app.use(express.json());

// Routes
app.use('/books', BookRoutes);
app.use('/genres', GenreRoutes);

// Sync Database and Start Server
(async () => {
  try {
    await sequelize.sync({ force: false }); // Set force to true to reset database
    console.log('Database synced successfully.');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error syncing the database:', error);
  }
})();
