import {
  DUMMY_POPULAR_MOVIES,
  DUMMY_TOP_RATED_MOVIES,
} from "../data/dummyMovies.js";
import { DUMMY_POPULAR_PEOPLE } from "../data/dummyPeople.js";
import {
  DUMMY_POPULAR_TV_SHOWS,
  DUMMY_TOP_RATED_TV_SHOWS,
} from "../data/dummyTvShows.js";

export function getTopRatedTitles(req, res, next) {
  if (
    DUMMY_TOP_RATED_MOVIES.length === 0 &&
    DUMMY_TOP_RATED_TV_SHOWS.length === 0
  ) {
    res.json({ message: "No top rated titles found!" });
    return next();
  }
  res.json({
    topRated: { movies: DUMMY_TOP_RATED_MOVIES, tv: DUMMY_TOP_RATED_TV_SHOWS },
  });
}

export function getPopularTitles(req, res, next) {
  if (
    DUMMY_POPULAR_MOVIES.length === 0 &&
    DUMMY_POPULAR_TV_SHOWS.length === 0
  ) {
    res.json({ message: "No popular titles found!" });
    return next();
  }
  res.json({
    popular: { movies: DUMMY_POPULAR_MOVIES, tv: DUMMY_POPULAR_TV_SHOWS },
  });
}
