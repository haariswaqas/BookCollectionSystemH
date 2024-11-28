import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookContainer = ({ book }) => {
  return (
    <div className="card shadow-sm border-0 rounded mb-4" style={{ maxWidth: '320px' }}>
      {/* Book Image */}
      <img 
        src={book.image} 
        alt="Book Cover" 
        className="card-img-top rounded-top" 
        style={{ height: '200px', objectFit: 'cover' }} 
      />

      {/* Card Body */}
      <div className="card-body">
        <h5 className="card-title text-center text-dark fw-bold">
          {book.title}
        </h5>
        <hr className="my-3" />
        <p className="card-text mb-2">
          <span className="fw-bold">Author:</span> {book.author}
        </p>
        <p className="card-text mb-2">
          <span className="fw-bold">Year Published:</span> {book.publishedYear}
        </p>
        <p className="card-text mb-2">
          <span className="fw-bold">Genre:</span> {book.genre_id}
        </p>
        <p className="card-text">
          <span className="fw-bold">Copies Left:</span> {book.copies_left}
        </p>
      </div>

      {/* Footer with Button */}
      
      </div>

  );
};

export default BookContainer;
