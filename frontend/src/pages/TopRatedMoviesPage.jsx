import { useEffect } from "react";
import TopRatedTitleItem from "../components/TopRatedTitleItem";
import { useState } from "react";
import axios from "axios";

function TopRatedMoviesPage() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  useEffect(() => {
    async function getTopRatedTitles() {
      try {
        const res = await axios.get("http://localhost:5001/api/top-rated");
        setTopRatedMovies(res.data.topRated.movies);
      } catch (err) {
        console.error(err);
      }
    }
    getTopRatedTitles();
  }, []);
  return (
    <div className="top-rated-page">
      <h1>Top Rated Movies</h1>
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
          {topRatedMovies.map((movie, idx) => (
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

export default TopRatedMoviesPage;
