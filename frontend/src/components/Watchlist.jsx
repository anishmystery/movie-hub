import WatchlistItem from "./WatchlistItem";

function Watchlist({ watchlist, onRemoveFromWatchlist }) {
  return (
    <div className="watchlist">
      {watchlist.map((item) => (
        <WatchlistItem
          key={item.id}
          watchlistItem={item}
          onRemoveFromWatchlist={onRemoveFromWatchlist}
        />
      ))}
    </div>
  );
}

export default Watchlist;
