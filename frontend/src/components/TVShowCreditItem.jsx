function TVShowCreditItem({ cast }) {
  return (
    <div className="credit-item">
      <img
        src={cast.poster}
        className="credit-poster"
        alt=""
        width={150}
        height={225}
      ></img>
      <p className="credit-title">{cast.name}</p>
      {cast.roles?.map((role, idx) => (
        <div key={idx} className="credit-role">
          <p>{role.character}</p>
          <p className="episode-count">{role.episodeCount} Episodes</p>
        </div>
      ))}
    </div>
  );
}

export default TVShowCreditItem;
