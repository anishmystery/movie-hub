function TopRatedHeader({
  topRatedTitlesSelectedType,
  onTopRatedTitlesSelectedTypeToggle,
}) {
  return (
    <div className="top-rated-header">
      <h2 className="header-text">Top Rated</h2>
      <div className="selector-list">
        <h3
          className={`selector-item ${
            topRatedTitlesSelectedType === "movie" ? "selected" : null
          }`}
          onClick={() => onTopRatedTitlesSelectedTypeToggle("movie")}
        >
          Movies
        </h3>
        <h3
          className={`selector-item ${
            topRatedTitlesSelectedType === "tv" ? "selected" : null
          }`}
          onClick={() => onTopRatedTitlesSelectedTypeToggle("tv")}
        >
          TV Shows
        </h3>
      </div>
    </div>
  );
}

export default TopRatedHeader;
