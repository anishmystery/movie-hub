import TVShowCreditItem from "./TVShowCreditItem";
import ViewMoreCredits from "./ViewMoreCredits";

function TVShowCreditsList({ tvShow }) {
  return (
    <div className="credits-list">
      {tvShow.cast.map((cast) => (
        <TVShowCreditItem cast={cast} key={cast.id} />
      ))}
      <ViewMoreCredits />
    </div>
  );
}

export default TVShowCreditsList;
