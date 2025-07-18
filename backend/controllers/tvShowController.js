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
