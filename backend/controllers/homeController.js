import { DUMMY_TRENDING_MOVIES } from "../data/dummyMovies.js";

export function home(req, res, next) {
  if (DUMMY_TRENDING_MOVIES.length === 0) {
    res.json({ message: "No trending movies found!" });
    return next();
  }
  res.json({ trendingMovies: DUMMY_TRENDING_MOVIES });
}
