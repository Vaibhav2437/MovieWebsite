import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './index.css'
const TopMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=66801caa3c3317abc8b7cf28ee34020a&language=en-US&page=1`
        );
        console.log(response);
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);
  return (
    <div className='bg-dark pt-5'>
          <div className='container-fluid content1 d-flex justify-content-between'>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {movies.map((movie) => (
                <div className="col" key={movie.id}>
                  <div className="container-fluid card card1 border-0 bg-dark text-center">
                    <NavLink to={`/movie/${movie.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        className="img-fluid img1"
                        alt={movie.title}
                        
                      />
                    </NavLink>
                    <div className="card-body cards p-0 bg-dark text-light text-center">
                      <p className="text-light p-0 m-0">{movie.original_title}</p>
                      <p className="text-light text-center m-0">{movie.vote_average}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}

export default TopMovies