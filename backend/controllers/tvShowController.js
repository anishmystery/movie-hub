import {
  DUMMY_TV_SHOWS,
  DUMMY_TV_SHOWS_CAST,
  DUMMY_TV_SHOWS_REVIEWS,
} from "../data/dummyTvShows.js";

export function getTVShowById(req, res, next) {
  const { id } = req.params;
  const tvShow = DUMMY_TV_SHOWS.find((tv) => tv.id === id);
  const credits = DUMMY_TV_SHOWS_CAST.find((c) => c.id === id);
  const reviews = DUMMY_TV_SHOWS_REVIEWS.find((r) => r.id === id);
  if (!tvShow) {
    res.json({ message: "Could not find the tv show for the given id" });
    return next();
  }
  res.json({
    ...tvShow,
    cast: credits?.cast || [],
    crew: credits?.crew || [],
    reviews: reviews?.reviews || [],
  });
}

export function addTVShowReview(req, res, next) {
  const { id, content, author, authorDetails } = req.body;
  const tv = DUMMY_TV_SHOWS.find((t) => t.id === id);

  if (!tv) return res.json({ message: "TV Show not found" });

  const newReview = {
    id: `r${DUMMY_TV_SHOWS_REVIEWS.reviews?.length + 1}`,
    content,
    createdAt: new Date().toISOString(),
    author,
    authorDetails,
  };
  console.log(DUMMY_TV_SHOWS_REVIEWS.reviews);

  tv.reviews = tv.reviews || [];
  tv.reviews.push(newReview);
  return res.json({ review: newReview });
}

export function removeReview(req, res, next) {
  const { id } = req.params;
  const { reviewId, userId } = req.body;

  const reviews = DUMMY_TV_SHOWS_REVIEWS.find((review) => review.id === id);
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
