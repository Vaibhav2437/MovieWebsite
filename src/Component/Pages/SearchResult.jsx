
import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
// import MovieList from './MovieList'; // Ensure this component displays the movies
import './search.css'
const SearchResult = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  // Fetch movies based on query
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=66801caa3c3317abc8b7cf28ee34020a&language=en-US&query=${query}&page=1`);
        setMovies(response.data.results);
        setError(null);
      } catch (err) {
        setError("Error fetching movies. Please try again.");
        console.error(err);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div className='bg-dark'>
            <h1 className='bg-dark p-3 text-light'>Search Results for "{query}"</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            
            {/* Check if there are movies to display */}
            {movies.length > 0 ? (
                <div className="movie-list">
                    <div className="movies-container">
                        {movies.map((movie) => (
                            <div className="movie-item" key={movie.id}>
                                <NavLink to={`/movie/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} class="img-fluid image" alt="..." height={250}></img>
                    </NavLink>
                                <div className="movie-info">
                                    <strong>{movie.title}</strong> ({movie.release_date?.split("-")[0]})
                                    <br />
                                    <small className='text-light'>{movie.overview?.substring(0, 100)}...</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="alert alert-info">No movies found for "{query}".</div>
            )}
        </div>
  
  );
};
export default SearchResult