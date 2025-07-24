function PopularTitleItem({ title }) {
  return (
    <div className="movie-item">
      <img
        src={title.poster}
        className="movie-poster"
        alt=""
        width={150}
        height={225}
      ></img>
      <p className="movie-title">{title.title || title.name}</p>
      <p className="movie-release-date">
        {title.releaseDate || title.firstAirDate}
      </p>
    </div>
  );
}

export default PopularTitleItem;
