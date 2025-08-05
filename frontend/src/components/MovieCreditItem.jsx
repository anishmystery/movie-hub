function MovieCreditItem({ cast }) {
  return (
    // <div className="credit-item">
    //   <img
    //     src={cast.poster}
    //     className="credit-poster"
    //     alt=""
    //     width={150}
    //     height={225}
    //   ></img>
    //   <p className="credit-title">{cast.name}</p>
    //   <p className="credit-role">{cast.character}</p>
    // </div>
    <div className="title-item">
      <div className="title-poster-wrapper">
        <img
          src={cast.poster}
          className="title-poster"
          alt=""
          width={150}
          height={225}
        ></img>
      </div>
      <div className="title-content">
        <p className="title-name">{cast.name}</p>
        <p className="title-release-date">{cast.character}</p>
      </div>
    </div>
  );
}

export default MovieCreditItem;
