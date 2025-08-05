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
  const reviews = DUMMY_MOVIES_REVIEWS.find((m) => m.id === id);

  if (!movie) return res.json({ message: "Movie not found" });

  // movie.reviews = reviews || [];

  const newReview = {
    id: `r${reviews.reviews.length + 1}`,
    content,
    createdAt: new Date().toISOString(),
    author,
    authorDetails,
  };
  reviews.reviews.push(newReview);
  return res.json({ review: newReview });
}

export function removeReview(req, res, next) {
  const { id } = req.params;
  const { reviewId, userId } = req.body;

  const reviews = DUMMY_MOVIES_REVIEWS.find((review) => review.id === id);
  if (!reviews) {
    return res.json({ message: "Review not found for the given title" });
  }

  const initialLength = reviews.reviews.length;

  reviews.reviews = reviews.reviews.filter(
    (review) => review.id !== reviewId || review.authorDetails.userId !== userId
  );

  if (reviews.reviews.length === initialLength) {
    return res.json({ message: "Review not found or unauthorized" });
  }

  return res.json({ message: "Review remvoed successfully!" });
}
