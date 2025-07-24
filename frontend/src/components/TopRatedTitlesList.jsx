import { Link } from "react-router-dom";
import TopRatedTitleItem from "./TopRatedTitleItem";

function TopRatedTitlesList({ topRatedTitles, topRatedTitlesSelectedType }) {
  return (
    <div className="movies-list">
      {topRatedTitlesSelectedType === "movie"
        ? topRatedTitles.movies?.map((title, idx) => (
            <Link
              key={idx}
              to={`/movie/${title.id}`}
              className="no-text-decoration"
            >
              <TopRatedTitleItem title={title} />
            </Link>
          ))
        : topRatedTitles.tv?.map((title, idx) => (
            <Link
              key={idx}
              to={`/tv/${title.id}`}
              className="no-text-decoration"
            >
              <TopRatedTitleItem title={title} />
            </Link>
          ))}
    </div>
  );
}

export default TopRatedTitlesList;
