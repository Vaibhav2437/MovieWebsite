import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, NavLink, useNavigate, useParams } from 'react-router-dom';
import './Moviedetail.css'
const MovieDetails = () => {
  const { id } = useParams(); // Get the ID from the route
  const [data, setData] = useState(null);
  const [cast, setCast] = useState([])
  const navigate = useNavigate();


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=66801caa3c3317abc8b7cf28ee34020a&language=en-US`)
      // axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=66801caa3c3317abc8b7cf28ee34020a&language=en-US`)
      .then((response) => { setData(response.data) })
      .catch((error) => console.error("Error fetching data:", error));
    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=66801caa3c3317abc8b7cf28ee34020a&language=en-US`)
      .then((response) => {
        setCast(response.data.cast);
      })
      .catch((error) => console.error("Error fetching cast data:", error));
    // getData()
  }, [id]);
  return (
    <div className='w-100 bg-dark text-light pt-4 pb-4'>

      {data ? (
        <div className='container rounded-2 d-flex overview p-0'>
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <div className='d-flex'>
                  <div>
                    <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} height={180} alt='' className='p-1' />
                  </div>

                  <div className='text-start w-100'>
                    <h3 className='w-75 fs-4'>{data.original_title}</h3>
                    <p>{data.vote_average}</p>
                    <div className='d-flex'>
                      {data.genres.map((genre) => (
                        <p>{genre.name}</p>
                      ))}
                    </div>
                    <p>Release Data : {data.release_date}</p>
                    
                  </div>

                </div>
                <div className='row text-start p-0'>
                  <div className='col p-0'>
                    <h2>Overview</h2>
                    <p className='data'>{data.overview}</p>
                  </div>
                </div>
              </div>
              <div class="col p-0">
                <div className='w-100 poster'>
                  <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} className='w-100 rounded-end-2' alt="Backdrop" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className='w-100'>
        <h3 className='text-start'>Cast</h3>
        <div className="cast-section">
          {cast.length > 0 ? (
            cast.slice(0, 5).map((actor) => (
              <div key={actor.cast_id} className="cast-card">
                <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.original_name} />
                <p>{actor.original_name}</p>
                <p>Character: {actor.character}</p>
              </div>
            ))
          ) : (
            <p>No cast data available.</p>
          )}
        </div>
      </div>
    </div>

  )
}

export default MovieDetails;