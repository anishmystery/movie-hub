import { DUMMY_MOVIES, DUMMY_MOVIES_REVIEWS } from "../data/dummyMovies.js";
import {
  DUMMY_TV_SHOWS,
  DUMMY_TV_SHOWS_REVIEWS,
} from "../data/dummyTvShows.js";
import { DUMMY_USERS } from "../data/dummyUsers.js";

export function getUserById(req, res, next) {
  const { id } = req.params;
  const user = DUMMY_USERS.find((u) => u.id === id);

  if (!user) return res.json({ message: "User not found!" });

  return res.json({ user });
}

export function addToWatchlist(req, res, next) {
  const { email, titleId, titleType } = req.body;

  const user = DUMMY_USERS.find((u) => u.email === email);
  if (!user) return res.json({ message: "User not found!" });

  const titleExists = user.watchlist.find(
    (w) => w.titleId === titleId && w.titleType === titleType
  );

  if (titleExists) return res.json({ message: "Already in watchlist" });

  user.watchlist.push({ titleId, titleType });
  return res.json({ watchlist: user.watchlist });
}

export function addToFavourites(req, res, next) {
  const { email, titleId, titleType } = req.body;

  const user = DUMMY_USERS.find((u) => u.email === email);
  if (!user) return res.json({ message: "User not found!" });

  const titleExists = user.favourites.find(
    (f) => f.titleId === titleId && f.titleType === titleType
  );

  if (titleExists) return res.json({ message: "Already in favourites" });

  user.favourites.push({ titleId, titleType });
  return res.json({ favourites: user.favourites });
}

export function removeFromWatchlist(req, res, next) {
  const { id } = req.params;

  const watchlistItem = DUMMY_USERS.watchlist?.find((w) => w.titleId === id);

  if (!watchlistItem) return res.json({ message: "Watchlist item not found!" });

  const filteredWatchlist = DUMMY_USERS.watchlist?.filter(
    (w) => w.titleId !== id
  );
  return res.json({ message: "Removed from watchlist successfully!" });
}

export function getUserReviews(req, res, next) {
  const { id } = req.params;
  const userReviews = [];

  DUMMY_MOVIES_REVIEWS.forEach((item) => {
    item.reviews.forEach((review) => {
      if (review.authorDetails.userId === id) {
        const movie = DUMMY_MOVIES.find((movie) => movie.id === item.id);
        userReviews.push({
          ...review,
          titleId: item.id,
          titleType: "movie",
          title: movie.title,
          poster: movie.poster,
        });
      }
    });
  });

  DUMMY_TV_SHOWS_REVIEWS.forEach((item) => {
    item.reviews.forEach((review) => {
      if (review.authorDetails.userId === id) {
        const tvShow = DUMMY_TV_SHOWS.find((tv) => tv.id === item.id);
        userReviews.push({
          ...review,
          titleId: item.id,
          titleType: "tv",
          title: tvShow.name,
          poster: tvShow.poster,
        });
      }
    });
  });

  return res.json({ userReviews });
}
