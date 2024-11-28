

// App.js
import React from 'react';
import ListBooks from './Books/ListBooks'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Container } from 'react-bootstrap';
import BookHeader from './Books/BookHeader'
import ListGenres from './Genres/Listgenres'
import EditGenreScreen from './Genres/EditGenreScreen'
import AddGenreScreen from './Genres/AddGenreScreen'
import AddBookScreen from './Books/AddBookScreen';

const App = () => {
    return (
      <div>
        <BookHeader></BookHeader>
      <Router>
      

        <Container>
          
        <Routes>
        <Route path='/' element={<ListBooks/>} />
        <Route path='/genres' element={<ListGenres/>} />
        <Route path='/add-genre' element={<AddGenreScreen/>} />
        <Route path='/addBook' element={<AddBookScreen/>} />
        <Route path= '/edit-genre/:id' element={<EditGenreScreen />} />     
        <Route path= '/edit-book/:id' element={<AddBookScreen />} />     
        </Routes>
        </Container>
      </Router>
      </div>
    );
};

export default App;