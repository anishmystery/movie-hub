const DUMMY_TRENDING_MOVIES = [
  {
    id: "m1",
    title: "Movie Title 1 aslekjaswas",
    releaseDate: "01/01/1900",
    popularity: 80,
    poster: "https://placehold.co/150x225",
  },
  {
    id: "m2",
    title: "Movie Title 2",
    releaseDate: "01/01/1900",
    popularity: 80,
    poster: "https://placehold.co/150x225",
  },
];

export function home(req, res, next) {
  if (DUMMY_TRENDING_MOVIES.length === 0) {
    res.json({ message: "No trending movies found!" });
    return next();
  }
  res.json({ trendingMovies: DUMMY_TRENDING_MOVIES });
}
