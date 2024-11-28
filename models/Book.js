const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Genre = require('./Genre');

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publishedYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genre_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Genre,
      key: 'id',
    },
  },
  copies_left: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }, 

  image: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

// Define the association
Book.belongsTo(Genre, { foreignKey: 'genre_id', as: 'genre' });
Genre.hasMany(Book, { foreignKey: 'genre_id', as: 'books' });

module.exports = Book;
