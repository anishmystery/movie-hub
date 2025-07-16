function MovieDetailsHeader({ movie, year }) {
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
            <h3>Favourite</h3>
            <h3>Watchlist</h3>
            <h3>Play Trailer</h3>
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
