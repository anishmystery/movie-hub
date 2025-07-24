import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function PopularMoviesPage() {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    async function getPopularTitles() {
      try {
        const res = await axios.get("http://localhost:5001/api/popular");
        setPopularMovies(res.data.popular.movies);
      } catch (err) {
        console.error(err);
      }
    }
    getPopularTitles();
  }, []);
  return (
    <div className="top-rated-page">
      <h1>Popular Movies</h1>
      <div className="top-rated-content-wrapper">
        <div className="filter-panel">
          <div className="filter-panel-header">
            <h3>Filters</h3>
          </div>
          <div className="filter-panel-content">
            <div className="filter-by-genres">
              <p>Genres</p>
            </div>
            <div className="filter-by-release-date">
              <p>Release Dates</p>
            </div>
            <div className="filter-by-ratings">
              <p>Ratings</p>
            </div>
          </div>
        </div>
        <div className="top-rated-list">
          {popularMovies.map((movie, idx) => (
            <div className="title-item" key={idx}>
              <div className="title-poster-wrapper">
                <img src={movie.poster} className="title-poster" alt=""></img>
              </div>
              <div className="title-content">
                <p className="title-name">{movie.title}</p>
                <p className="title-release-date">{movie.releaseDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularMoviesPage;
