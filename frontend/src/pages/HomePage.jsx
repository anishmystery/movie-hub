import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    async function homePage() {
      try {
        const res = await axios.get("http://localhost:5001/api");
        setTrendingMovies(res.data.trendingMovies);
      } catch (err) {
        console.error(err);
      }
    }
    homePage();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      {trendingMovies && (
        <div className="movies-list">
          {trendingMovies.map((movie) => (
            <div className="movie-item" key={movie.id}>
              <img
                src={movie.poster}
                className="movie-poster"
                alt=""
                width={150}
                height={225}
              ></img>
              <p className="movie-title">{movie.title}</p>
              <p className="movie-release-date">{movie.releaseDate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
