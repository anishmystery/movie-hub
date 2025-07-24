function TopRatedTitleItem({ title }) {
  return (
    <div className="title-item">
      <div className="title-poster-wrapper">
        <img
          src={title.poster}
          className="title-poster"
          alt=""
          width={150}
          height={225}
        ></img>
      </div>
      <div className="title-content">
        <p className="title-name">{title.title || title.name}</p>
        <p className="title-release-date">
          {title.releaseDate || title.firstAirDate}
        </p>
      </div>
    </div>
  );
}

export default TopRatedTitleItem;
