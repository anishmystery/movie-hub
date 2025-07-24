import { Link } from "react-router-dom";
import PopularTitleItem from "./PopularTitleItem";

function PopularTitlesList({ popularTitles, popularTitlesSelectedType }) {
  return (
    <div className="movies-list">
      {popularTitlesSelectedType === "movie"
        ? popularTitles.movies?.map((title, idx) => (
            <Link
              key={idx}
              to={`/movie/${title.id}`}
              className="no-text-decoration"
            >
              <PopularTitleItem title={title} />
            </Link>
          ))
        : popularTitles.tv?.map((title, idx) => (
            <Link
              key={idx}
              to={`/tv/${title.id}`}
              className="no-text-decoration"
            >
              <PopularTitleItem title={title} />
            </Link>
          ))}
    </div>
  );
}

export default PopularTitlesList;
