import MovieCreditItem from "./MovieCreditItem";
import ViewMoreCredits from "./ViewMoreCredits";

function MovieCreditsList({ movie }) {
  return (
    <div className="credits-list">
      {movie.cast.map((cast) => (
        <MovieCreditItem cast={cast} key={cast.id} />
      ))}
      <ViewMoreCredits />
    </div>
  );
}

export default MovieCreditsList;
