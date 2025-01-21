import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Navbar = () => {
    // Function to handle form submission
    const [query, setQuery] = useState(""); // User's search input
    const [error, setError] = useState(null); // Handle errors
    const navigate = useNavigate(); // For navigating to search page

    // Handle Search
    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent form submission

        if (!query) return; // Prevent empty searches

        try {
            // Navigate to the search results page
            navigate(`/search/${query}`);
        } catch (err) {
            setError("Error fetching data. Please try again.");
            console.error(err);
        }
    };

    return (
        <div>
        <div className='w-100 navbar'>
            <div className='container'>
                <nav className="navbar navbar-expand-lg container-fluid">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <NavLink className="navbar-brand text-light" to="/home">MovieDb</NavLink>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active text-secondary" aria-current="page" to="/home">Popular</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-secondary" to="/topmovies">Top Rated</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-secondary" to="/upcoming">Upcoming</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={handleSearch}>
                                <input
                                    type="text"
                                    placeholder="Search movies..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <button type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
);
}

export default Navbar;