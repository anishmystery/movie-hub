import MovieCreditsList from "./MovieCreditsList";

function MovieCredits({ movie }) {
  return (
    <div className="movie-credits-container">
      <h2>Credits</h2>
      <MovieCreditsList movie={movie} />
    </div>
  );
}

export default MovieCredits;
