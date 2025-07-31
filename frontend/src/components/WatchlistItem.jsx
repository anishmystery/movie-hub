import { Link } from "react-router-dom";

function WatchlistItem({ watchlistItem, onRemoveFromWatchlist }) {
  return (
    <Link
      to={`/${watchlistItem.titleType}/${watchlistItem.id}`}
      className="no-text-decoration"
    >
      <div className="watchlist-item">
        <div className="watchlist-poster-wrapper">
          <img src="https://placehold.co/90x141" className="watchlist-poster" />
        </div>
        <div className="watchlist-content">
          <div className="watchlist-content-header">
            <div className="watchlist-title">
              <h3>{watchlistItem.title || watchlistItem.name}</h3>
              <p>{watchlistItem.releaseDate || watchlistItem.firstAirDate}</p>
            </div>
            <div
              className="remove"
              onClick={() => onRemoveFromWatchlist(watchlistItem.id)}
            >
              <strong>❌</strong>
            </div>
          </div>
          <p>{watchlistItem.overview}</p>
        </div>
      </div>
    </Link>
  );
}

export default WatchlistItem;
