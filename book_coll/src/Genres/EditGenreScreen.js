import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditGenreScreen = () => {
  const { id } = useParams(); // Get the genre ID from the URL parameters
  const [genre, setGenre] = useState(null); // State to store the genre
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error messages

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const response = await fetch(`http://localhost:3000/genres/${id}`); // Fetch the genre from the backend
        if (!response.ok) {
          throw new Error(`Error fetching genre: ${response.statusText}`);
        }
        const data = await response.json();
        setGenre(data); // Set the fetched genre
      } catch (err) {
        setError(err.message); // Set error message if fetching fails
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchGenre(); // Call the fetch function
  }, [id]); // Dependency array includes id to refetch if it changes

  const handleChange = (event) => {
    setGenre({ ...genre, name: event.target.value }); // Update genre name on input change
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch(`http://localhost:3000/genres/${id}`, {
        method: 'PUT', // Use PUT to update the genre
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(genre), // Send the updated genre as JSON
      });

      if (!response.ok) {
        throw new Error(`Error updating genre: ${response.statusText}`);
      }

      alert('Genre updated successfully!');
    } catch (err) {
      setError(err.message); // Set error message if updating fails
    }
  };

  if (loading) {
    return <p className="text-center text-secondary">Loading...</p>; // Styled loading message
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">Error: {error}</div>
      </div>
    );
  }

  if (!genre) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning">Genre not found.</div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-warning text-white">
          <h2 className="text-center">Edit Genre</h2>
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
                value={genre.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Update Genre
              </button>
            </div>
          </form>
          {error && <div className="alert alert-danger mt-3">Error: {error}</div>}
        </div>
      </div>
    </div>
  );
};

export default EditGenreScreen;
