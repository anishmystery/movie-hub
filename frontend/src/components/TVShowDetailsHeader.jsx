function TVShowDetailsHeader({ tvShow, year }) {
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
            <h3>Favourite</h3>
            <h3>Watchlist</h3>
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
