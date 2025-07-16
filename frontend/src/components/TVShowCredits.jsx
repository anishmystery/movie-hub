import TVShowCreditsList from "./TVShowCreditsList";

function TVShowCredits({ tvShow }) {
  return (
    <div className="tv-show-credits-container">
      <h2>Credits</h2>
      <TVShowCreditsList tvShow={tvShow} />
    </div>
  );
}

export default TVShowCredits;
