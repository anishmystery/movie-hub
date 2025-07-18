import {
  DUMMY_MOVIES,
  DUMMY_MOVIES_CAST,
  DUMMY_MOVIES_REVIEWS,
} from "../data/dummyMovies.js";

export function getMovieById(req, res, next) {
  const { id } = req.params;
  const movie = DUMMY_MOVIES.find((m) => m.id === id);
  const credits = DUMMY_MOVIES_CAST.find((c) => c.id === id);
  const reviews = DUMMY_MOVIES_REVIEWS.find((r) => r.id === id);
  if (!movie) {
    res.json({ message: "Could not find the movie for the given id" });
    return next();
  }
  res.json({
    ...movie,
    cast: credits?.cast || [],
    crew: credits?.crew || [],
    reviews: reviews?.reviews || [],
  });
}
