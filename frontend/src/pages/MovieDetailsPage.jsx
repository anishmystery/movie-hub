import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetailsHeader from "../components/MovieDetailsHeader";
import MovieCredits from "../components/MovieCredits";
import MovieReviews from "../components/MovieReviews";

function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const year = movie.releaseDate ? movie.releaseDate.split("/")[2] : "";
  useEffect(() => {
    async function getMovieDetails() {
      try {
        const res = await axios.get(`http://localhost:5001/api/movie/${id}`);
        console.log(res.data);
        setMovie(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getMovieDetails();
  }, [id]);

  return (
    <div className="movie-details-page">
      {movie && Object.keys(movie).length !== 0 && (
        <>
          <MovieDetailsHeader movie={movie} year={year} />
          {movie.cast && <MovieCredits movie={movie} />}
          {movie.reviews && <MovieReviews movie={movie} id={id} />}
        </>
      )}
    </div>
  );
}

export default MovieDetailsPage;
