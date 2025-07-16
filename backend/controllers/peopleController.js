const DUMMY_PEOPLE = [
  {
    id: "p1",
    name: "Person Name 1",
    biography:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quam quo, ex iste atque aliquam, eius doloribus nobis dignissimos sunt repudiandae obcaecati! Itaque quo nobis deserunt recusandae reprehenderit vero placeat?",
    birthday: "01/01/1900",
    deathday: null,
    gender: "Male",
    knownForDepartment: "Acting",
    profilePath: "https://placehold.co/300x450",
    placeOfBirth: "Some place, Some state, Some country",
    alsoKnownAs: ["Name 1", "Name 2", "Name 3"],
  },
  {
    id: "p2",
    name: "Person Name 2",
    biography:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quam quo, ex iste atque aliquam, eius doloribus nobis dignissimos sunt repudiandae obcaecati! Itaque quo nobis deserunt recusandae reprehenderit vero placeat?",
    birthday: "01/01/1900",
    deathday: null,
    gender: "Female",
    knownForDepartment: "Acting",
    profilePath: "https://placehold.co/300x450",
    placeOfBirth: "Some place, Some state, Some country",
    alsoKnownAs: ["Name 1"],
  },
];

const DUMMY_CREDITS = [
  {
    id: "p1",
    cast: [
      {
        id: "c1",
        title: "Credits Title 1",
        releaseDate: "01/01/1900",
        character: "Character Name 1",
        poster: "https://placehold.co/66x66",
        mediaType: "movie",
      },
      {
        id: "c2",
        name: "Credits Title 2",
        firstAirDate: "01/01/1900",
        character: "Character Name 2",
        episodeCount: 1,
        poster: "https://placehold.co/66x66",
        mediaType: "tv",
      },
      {
        id: "c3",
        name: "Credits Title 3",
        firstAirDate: "01/01/1900",
        character: "Character Name 3",
        episodeCount: 8,
        poster: "https://placehold.co/66x66",
        mediaType: "tv",
      },
    ],
    crew: [
      {
        id: "cr1",
        title: "Credits Title 1",
        releaseDate: "01/01/1900",
        poster: "https://placehold.co/66x66",
        department: "Department Name 1",
        job: "Job Name 1",
        mediaType: "movie",
      },
      {
        id: "cr2",
        title: "Credits Title 2",
        releaseDate: "01/01/1900",
        poster: "https://placehold.co/66x66",
        department: "Department Name 1",
        job: "Job Name 2",
        mediaType: "movie",
      },
      {
        id: "cr3",
        title: "Credits Title 3",
        releaseDate: "01/01/1900",
        poster: "https://placehold.co/66x66",
        department: "Department Name 2",
        job: "Job Name 3",
        mediaType: "movie",
      },
      {
        id: "cr4",
        name: "Credits Title 2",
        firstAirDate: "01/01/1900",
        episodeCount: 1,
        poster: "https://placehold.co/66x66",
        department: "Department Name 1",
        job: "Job Name 1",
        mediaType: "tv",
      },
    ],
  },
];

export function getPersonById(req, res, next) {
  const { id } = req.params;
  const person = DUMMY_PEOPLE.find((p) => p.id === id);
  const credits = DUMMY_CREDITS.find((c) => c.id === id);
  if (!person) {
    res.json({ message: "Could not find the person for the given id" });
    return next();
  }
  res.json({ ...person, credits: { cast: credits.cast, crew: credits.crew } });
}
