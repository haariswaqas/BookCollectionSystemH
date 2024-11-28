import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../Books/book.css"; // Assuming additional custom styling

const GenreList = () => {
  const [genres, setGenres] = useState([]); // State to store genres
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to store any errors

  const fetchGenres = async () => {
    const apiUrl = "http://localhost:3000/genres"; // Replace with your API URL

    try {
      setLoading(true);
      const response = await fetch(apiUrl); // Make the API call
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json(); // Parse JSON response
      setGenres(result); // Update state with the genres
    } catch (err) {
      setError(err.message); // Catch and set any errors
    } finally {
      setLoading(false); // Stop the loading spinner
    }
  };

  // Call the fetchGenres function when the component loads
  useEffect(() => {
    fetchGenres();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Delete handler function
  const deleteHandler = async (genreId) => {
    if (window.confirm("Are you sure you want to delete this genre?")) {
      try {
        const response = await fetch(`http://localhost:3000/genres/${genreId}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error(`Error deleting genre: ${response.status}`);
        }

        // Remove the deleted genre from the state
        setGenres(genres.filter((genre) => genre.id !== genreId));
        console.log(`Genre with ID ${genreId} deleted successfully!`);
      } catch (error) {
        console.error(`Error deleting genre: ${error.message}`);
      }
    }
  };

  // Render UI based on the state
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">Genres</h1>
        <Link to="/add-genre">
          <button className="btn btn-success">Add Genre ➕</button>
        </Link>
      </div>

      {loading && <p className="text-center text-secondary">Loading genres...</p>}
      {error && (
        <div className="alert alert-danger text-center">
          Error: {error}
        </div>
      )}
      {genres.length > 0 ? (
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">Genre Name</th>
              <th scope="col" className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {genres.map((genre) => (
              <tr key={genre.id}>
                <td className="align-middle">{genre.name}</td>
                <td className="text-center">
                  <div className="btn-group" role="group">
                    <Link to={`/edit-genre/${genre.id}`}>
                      <button className="btn btn-warning">Edit</button>
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteHandler(genre.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && (
          <div className="alert alert-info text-center">No genres found.</div>
        )
      )}
    </div>
  );
};

export default GenreList;
