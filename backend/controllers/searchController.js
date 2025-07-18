import { DUMMY_MOVIES } from "../data/dummyMovies.js";
import { DUMMY_PEOPLE } from "../data/dummyPeople.js";
import { DUMMY_TV_SHOWS } from "../data/dummyTvShows.js";

export function search(req, res, next) {
  const query = req.query.query?.toLowerCase() || "";
  const type = req.query.type || "all";

  const results = {
    movies: [],
    tv: [],
    people: [],
  };

  if (type === "movie" || type === "all") {
    results.movies = DUMMY_MOVIES.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );
  }

  if (type === "tv" || type === "all")
    results.tv = DUMMY_TV_SHOWS.filter((tv) =>
      tv.name.toLowerCase().includes(query)
    );

  if (type === "people" || type === "all")
    results.people = DUMMY_PEOPLE.filter((person) =>
      person.name.toLowerCase().includes(query)
    );

  if (
    results.movies.length === 0 &&
    results.tv.length === 0 &&
    results.people.length === 0
  ) {
    res.json({ message: "No search results found!" });
    return next();
  }

  res.json(results);
}
