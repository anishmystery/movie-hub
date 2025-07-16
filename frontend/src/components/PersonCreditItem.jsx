function PersonCreditItem({ credit }) {
  return (
    <div className="person-credits-item">
      <img
        className="person-credits-poster"
        src={credit.poster}
        width={66}
        height={66}
      />
      <div className="person-credits-content">
        <h4>{credit.title || credit.name}</h4>
        <span>{credit.character || credit.job}</span>
        <span>
          {credit.episodeCount
            ? credit.episodeCount === 1
              ? ` (${credit.episodeCount} episode)`
              : ` (${credit.episodeCount} episodes)`
            : null}
        </span>
      </div>
      <p className="person-credits-release-year">
        {credit.releaseDate?.split("/")[2] ||
          credit.firstAirDate?.split("/")[2]}
      </p>
    </div>
  );
}

export default PersonCreditItem;
