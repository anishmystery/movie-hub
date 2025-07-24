import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function TopRatedTVShowsPage() {
  const [topRatedTVShows, setTopRatedTVShows] = useState([]);
  useEffect(() => {
    async function getTopRatedTitles() {
      try {
        const res = await axios.get("http://localhost:5001/api/top-rated");
        setTopRatedTVShows(res.data.topRated.tv);
      } catch (err) {
        console.error(err);
      }
    }
    getTopRatedTitles();
  }, []);
  return (
    <div className="top-rated-page">
      <h1>Top Rated TV Shows</h1>
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
          {topRatedTVShows.map((tv, idx) => (
            <div className="title-item" key={idx}>
              <div className="title-poster-wrapper">
                <img src={tv.poster} className="title-poster" alt=""></img>
              </div>
              <div className="title-content">
                <p className="title-name">{tv.name}</p>
                <p className="title-release-date">{tv.firstAirDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopRatedTVShowsPage;
