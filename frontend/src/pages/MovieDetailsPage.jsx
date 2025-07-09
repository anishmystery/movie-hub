import axios from "axios";
import { useEffect } from "react";

function MovieDetailsPage() {
  useEffect(() => {
    async function getMovieDetails() {
      try {
        const res = await axios.get("http://localhost:5001/api/movie/m1");
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getMovieDetails();
  }, []);
  return (
    <div>
      <h1>Movie Details</h1>
    </div>
  );
}

export default MovieDetailsPage;
