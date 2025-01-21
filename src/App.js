import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/NavBar/Navbar.jsx';
import Home from './Component/Pages/Home.jsx';
import TopMovies from './Component/Pages/TopMovies.jsx';
import Upcomingmovies from './Component/Pages/Upcomingmovies.jsx';
import MovieDetails from './Component/Pages/MovieDetails.jsx';
// import Search_Page from './Component/Pages/Search_page.jsx';
import SearchResult from './Component/Pages/SearchResult.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path ='/topmovies' element={<TopMovies/>}></Route>
        <Route path='/upcoming' element={<Upcomingmovies/>}></Route>
        <Route path='/movie/:id' element={<MovieDetails/>}></Route>
        <Route path='/search/:query' element={<SearchResult/>}> </Route> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
