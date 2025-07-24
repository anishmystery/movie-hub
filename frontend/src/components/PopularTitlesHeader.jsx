function PopularTitlesHeader({
  popularTitlesSelectedType,
  onPopularTitlesSelectedTypeToggle,
}) {
  return (
    <div className="popular-header">
      <h2 className="header-text">Popular</h2>
      <div className="selector-list">
        <h3
          className={`selector-item ${
            popularTitlesSelectedType === "movie" ? "selected" : null
          }`}
          onClick={() => onPopularTitlesSelectedTypeToggle("movie")}
        >
          Movies
        </h3>
        <h3
          className={`selector-item ${
            popularTitlesSelectedType === "tv" ? "selected" : null
          }`}
          onClick={() => onPopularTitlesSelectedTypeToggle("tv")}
        >
          TV Shows
        </h3>
      </div>
    </div>
  );
}

export default PopularTitlesHeader;
