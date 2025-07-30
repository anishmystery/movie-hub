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

export function addMovieReview(req, res, next) {
  const { id, content, author, authorDetails } = req.body;
  const movie = DUMMY_MOVIES.find((m) => m.id === id);

  if (!movie) return res.json({ message: "Movie not found" });

  const newReview = {
    id: `r${DUMMY_MOVIES_REVIEWS.reviews?.length + 1}`,
    content,
    createdAt: new Date().toISOString(),
    author,
    authorDetails,
  };

  movie.reviews = movie.reviews || [];
  movie.reviews.push(newReview);
  return res.json({ review: newReview });
}
