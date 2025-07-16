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
      <p className="credit-role">{cast.character}</p>
    </div>
  );
}

export default TVShowCreditItem;
