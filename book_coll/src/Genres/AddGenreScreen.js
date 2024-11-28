import React, { useState } from 'react';

const AddGenreScreen = () => {
  const [genreName, setGenreName] = useState(''); // State to store the genre name
  const [error, setError] = useState(null); // State to store any errors
  const [success, setSuccess] = useState(null); // State to store success message

  const handleInputChange = (event) => {
    setGenreName(event.target.value); // Update genre name state
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Reset error and success messages
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('http://localhost:3000/genres', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: genreName }), // Send the genre name as JSON
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json(); // Parse JSON response
      setSuccess(`Genre "${result.name}" added successfully!`); // Set success message
      setGenreName(''); // Clear the input field
    } catch (err) {
      setError(err.message); // Set error message
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h2 className="text-center">Add New Genre</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="genreName" className="form-label">
                Genre Name
              </label>
              <input
                id="genreName"
                type="text"
                className="form-control"
                value={genreName}
                onChange={handleInputChange}
                placeholder="Enter genre name"
                required
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-success">
                Add Genre
              </button>
            </div>
          </form>
          {error && <div className="alert alert-danger mt-3">Error: {error}</div>}
          {success && <div className="alert alert-success mt-3">{success}</div>}
        </div>
      </div>
    </div>
  );
};

export default AddGenreScreen;
