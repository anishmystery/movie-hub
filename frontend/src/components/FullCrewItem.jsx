function FullCrewItem({ crew, titleType }) {
  return (
    <div className="crew-item">
      <img className="crew-item-poster" src="https://placehold.co/66x66" />
      <div className="crew-item-content">
        <h4>{crew?.name}</h4>
        <div className="crew-roles">
          {titleType === "movie" ? (
            <span>{crew.job}</span>
          ) : (
            crew?.jobs?.map((job, idx) => (
              <div key={job.id} className="credit-role">
                {idx > 0 ? ", " : null}
                <span>{job.job}</span>
                <span className="episode-count">
                  {" "}
                  {`(${job.episodeCount} Episodes)`}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default FullCrewItem;
