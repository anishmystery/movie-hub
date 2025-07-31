import axios from "axios";
import { useState } from "react";

function MovieDetailsHeader({ movie, year }) {
  const [isFavourited, setIsFavourited] = useState(false);
  const [isAddedToWatchlist, setIsAddedToWatchlist] = useState(false);
  async function handleAddToWatchlist() {
    try {
      const res = await axios.post("http://localhost:5001/api/user/watchlist", {
        email: "test@test.com",
        titleId: movie.id,
        titleType: "movie",
      });
      console.log(res.data);
      setIsAddedToWatchlist(true);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleAddToFavourites() {
    try {
      const res = await axios.post("http://localhost:5001/api/user/favourite", {
        email: "test@test.com",
        titleId: movie.id,
        titleType: "movie",
      });
      console.log(res.data);
      setIsFavourited(true);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="movie-details-header">
      <img
        className="movie-poster"
        src={movie.poster}
        alt=""
        width={300}
        height={450}
      ></img>
      <div className="movie-details-content">
        <div className="movie-details-content-header">
          <h1>
            {movie.title} ({year})
          </h1>
          <div className="movie-details-metadata">
            <p>{movie.releaseDate}</p>
            <p>&bull;</p>
            {movie.genres?.map((gen) => (
              <p key={gen.id}>{gen.name}</p>
            ))}
            <p>&bull;</p>
            <p>{movie.runtime}</p>
          </div>
        </div>
        <div className="content-actions">
          <div className="content-popularity">
            <h2>{movie.popularity}%</h2>
            <h2>Add your rating</h2>
          </div>
          <div className="content-save">
            {!isFavourited ? (
              <button onClick={handleAddToFavourites} className="favourite-btn">
                ❤️
              </button>
            ) : null}
            {!isAddedToWatchlist ? (
              <button onClick={handleAddToWatchlist} className="watchlist-btn">
                ➕
              </button>
            ) : null}
            <button>Play Trailer</button>
          </div>
        </div>
        <div className="content-overview">
          <p>{movie.overview}</p>
        </div>
        <div className="content-credits">
          {movie.createdBy?.map((creator) => (
            <div className="content-creators" key={creator.id}>
              <strong>{creator.name}</strong>
              <p>{creator.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsHeader;
