function FullCreditsHeader({ title, onBack }) {
  return (
    <div className="full-credits-header">
      <div className="full-credits-header-poster-wrapper">
        <img
          src="https://placehold.co/90x141"
          className="full-credits-header-poster"
        />
      </div>
      <div className="full-credits-header-content">
        <h1>{`${title.title || title.name} (${
          title.releaseDate?.split("/")[2] || title.firstAirDate?.split("/")[2]
        })`}</h1>
        <p className="back" onClick={onBack}>
          {"<- Back to main"}
        </p>
      </div>
    </div>
  );
}

export default FullCreditsHeader;
