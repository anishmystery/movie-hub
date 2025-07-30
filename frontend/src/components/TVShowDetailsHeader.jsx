import axios from "axios";
import { useState } from "react";

function TVShowDetailsHeader({ tvShow, year }) {
  const [isFavourited, setIsFavourited] = useState(false);
  const [isAddedToWatchlist, setIsAddedToWatchlist] = useState(false);
  async function handleAddToWatchlist() {
    try {
      const res = await axios.post("http://localhost:5001/api/user/watchlist", {
        email: "test@test.com",
        titleId: tvShow.id,
        titleType: "tv",
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
        titleId: tvShow.id,
        titleType: "tv",
      });
      console.log(res.data);
      setIsFavourited(true);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="tv-show-details-header">
      <img
        className="tv-show-poster"
        src={tvShow.poster}
        alt=""
        width={300}
        height={450}
      ></img>
      <div className="tv-show-details-content">
        <div className="tv-show-details-content-header">
          <h1>
            {tvShow.name} ({year})
          </h1>
          <div className="tv-show-details-metadata">
            <p>{tvShow.firstAirDate}</p>
            <p>&bull;</p>
            {tvShow.genres?.map((gen) => (
              <p key={gen.id}>{gen.name}</p>
            ))}
            <p>&bull;</p>
            <p>{tvShow.numberOfSeasons} Seasons</p>
          </div>
        </div>
        <div className="content-actions">
          <div className="content-popularity">
            <h2>{tvShow.popularity}%</h2>
            <h2>Add your rating</h2>
          </div>
          <div className="content-save">
            {!isFavourited ? (
              <button onClick={handleAddToFavourites}>Favourite</button>
            ) : null}
            {!isAddedToWatchlist ? (
              <button onClick={handleAddToWatchlist}>Watchlist</button>
            ) : null}
            <h3>Play Trailer</h3>
          </div>
        </div>
        <div className="content-overview">
          <p>{tvShow.overview}</p>
        </div>
        <div className="content-credits">
          {tvShow.createdBy?.map((creator) => (
            <div className="content-creators" key={creator.id}>
              <strong>{creator.name}</strong>
              <p>Creator</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TVShowDetailsHeader;
