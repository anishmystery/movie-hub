function FullCastItem({ cast, titleType }) {
  return (
    <div className="cast-item">
      <img className="cast-item-poster" src="https://placehold.co/66x66" />
      <div className="cast-item-content">
        <h4>{cast.name}</h4>
        <div className="cast-roles">
          {titleType === "movie" ? (
            <span>{cast.character}</span>
          ) : (
            cast.roles.map((role, idx) => (
              <div key={idx} className="credit-role">
                {idx > 0 ? ", " : null}
                <span>{role.character}</span>
                <span className="episode-count">
                  {" "}
                  {`(${role.episodeCount} Episodes)`}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default FullCastItem;
