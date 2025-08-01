export const DUMMY_MOVIES = [
  {
    id: "m1",
    title: "Movie Name 1",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae error ipsam suscipit eius fugiat veritatis iure aperiam temporibus aspernatur sequi. Molestiae ipsa error optio tenetur dignissimos consequatur nisi itaque minima!",
    releaseDate: "01/01/1900",
    genres: [
      {
        id: "g1",
        name: "Genre 1",
      },
      {
        id: "g2",
        name: "Genre 2",
      },
      {
        id: "g3",
        name: "Genre 3",
      },
    ],
    createdBy: [
      {
        id: "c1",
        name: "Creator Name 1",
        role: "Director",
      },
      {
        id: "c2",
        name: "Creator Name 2",
        role: "Writer",
      },
      {
        id: "c3",
        name: "Creator Name 3",
        role: "Writer",
      },
    ],
    runtime: "2h 3m",
    popularity: 80,
    poster: "https://placehold.co/300x450",
  },
  {
    id: "m2",
    title: "Movie Title 2",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae error ipsam suscipit eius fugiat veritatis iure aperiam temporibus aspernatur sequi. Molestiae ipsa error optio tenetur dignissimos consequatur nisi itaque minima!",
    releaseDate: "01/01/1900",
    genres: [
      {
        id: "g1",
        name: "Genre 1",
      },
      {
        id: "g2",
        name: "Genre 2",
      },
    ],
    createdBy: [
      {
        id: "c1",
        name: "Creator Name 1",
        role: "Director",
      },
    ],
    runtime: "2h 3m",
    popularity: 70,
    poster: "https://placehold.co/300x450",
  },
];

export const DUMMY_MOVIES_CAST = [
  {
    id: "m1",
    cast: [
      {
        id: "c1",
        name: "Cast Name 1",
        character: "Cast Character Name 1",
        poster: "https://placehold.co/150x225",
      },
      {
        id: "c2",
        name: "Cast Name 2",
        character: "Cast Character Name 2",
        poster: "https://placehold.co/150x225",
      },
      {
        id: "c3",
        name: "Cast Name 3",
        character: "Cast Character Name 3",
        poster: "https://placehold.co/150x225",
      },
    ],
    crew: [
      {
        id: "cr1",
        name: "Crew Name 1",
        department: "Department Name 1",
        job: "Job Title 1",
        poster: "https://placehold.co/150x225",
      },
      {
        id: "cr1",
        name: "Crew Name 1",
        department: "Department Name 1",
        job: "Job Title 1",
        poster: "https://placehold.co/150x225",
      },
      {
        id: "cr2",
        name: "Crew Name 2",
        department: "Department Name 1",
        job: "Job Title 2",
        poster: "https://placehold.co/150x225",
      },
      {
        id: "cr3",
        name: "Crew Name 3",
        department: "Department Name 2",
        job: "Job Title 3",
        poster: "https://placehold.co/150x225",
      },
      {
        id: "cr4",
        name: "Crew Name 1",
        department: "Department Name 1",
        job: "Job Title 1",
        poster: "https://placehold.co/150x225",
      },
    ],
  },
];

export const DUMMY_MOVIES_REVIEWS = [
  {
    id: "m1",
    reviews: [
      {
        id: "r1",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio tenetur, consequuntur ullam cupiditate, libero, eveniet illum totam molestiae vero voluptatibus voluptatem. Vitae nulla quasi eos, libero quod vero debitis sit?",
        createdAt: "MM/DD/YYYY",
        author: "Author Name 1",
        authorDetails: {
          userId: "u1",
          avatarPath: "https://placehold.co/45x45",
          rating: 80,
        },
      },
      {
        id: "r2",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio tenetur, consequuntur ullam cupiditate, libero, eveniet illum totam molestiae vero voluptatibus voluptatem. Vitae nulla quasi eos, libero quod vero debitis sit?",
        createdAt: "MM/DD/YYYY",
        author: "Author Name 2",
        authorDetails: {
          userId: "u2",
          avatarPath: "https://placehold.co/45x45",
          rating: 60,
        },
      },
    ],
  },
  {
    id: "m2",
    reviews: [
      {
        id: "r1",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio tenetur, consequuntur ullam cupiditate, libero, eveniet illum totam molestiae vero voluptatibus voluptatem. Vitae nulla quasi eos, libero quod vero debitis sit?",
        createdAt: "MM/DD/YYYY",
        author: "Author Name 1",
        authorDetails: {
          userId: "u1",
          avatarPath: "https://placehold.co/45x45",
          rating: 80,
        },
      },
    ],
  },
];

export const DUMMY_POPULAR_MOVIES = [
  {
    id: "m1",
    title: "Movie Name 1",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae error ipsam suscipit eius fugiat veritatis iure aperiam temporibus aspernatur sequi. Molestiae ipsa error optio tenetur dignissimos consequatur nisi itaque minima!",
    releaseDate: "01/01/1900",
    genres: [
      {
        id: "g1",
        name: "Genre 1",
      },
      {
        id: "g2",
        name: "Genre 2",
      },
      {
        id: "g3",
        name: "Genre 3",
      },
    ],
    createdBy: [
      {
        id: "c1",
        name: "Creator Name 1",
        role: "Director",
      },
      {
        id: "c2",
        name: "Creator Name 2",
        role: "Writer",
      },
      {
        id: "c3",
        name: "Creator Name 3",
        role: "Writer",
      },
    ],
    runtime: "2h 3m",
    popularity: 80,
    poster: "https://placehold.co/300x450",
  },
  {
    id: "m2",
    title: "Movie Title 2",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae error ipsam suscipit eius fugiat veritatis iure aperiam temporibus aspernatur sequi. Molestiae ipsa error optio tenetur dignissimos consequatur nisi itaque minima!",
    releaseDate: "01/01/1900",
    genres: [
      {
        id: "g1",
        name: "Genre 1",
      },
      {
        id: "g2",
        name: "Genre 2",
      },
    ],
    createdBy: [
      {
        id: "c1",
        name: "Creator Name 1",
        role: "Director",
      },
    ],
    runtime: "2h 3m",
    popularity: 70,
    poster: "https://placehold.co/300x450",
  },
  {
    id: "m1",
    title: "Movie Name 1",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae error ipsam suscipit eius fugiat veritatis iure aperiam temporibus aspernatur sequi. Molestiae ipsa error optio tenetur dignissimos consequatur nisi itaque minima!",
    releaseDate: "01/01/1900",
    genres: [
      {
        id: "g1",
        name: "Genre 1",
      },
      {
        id: "g2",
        name: "Genre 2",
      },
      {
        id: "g3",
        name: "Genre 3",
      },
    ],
    createdBy: [
      {
        id: "c1",
        name: "Creator Name 1",
        role: "Director",
      },
      {
        id: "c2",
        name: "Creator Name 2",
        role: "Writer",
      },
      {
        id: "c3",
        name: "Creator Name 3",
        role: "Writer",
      },
    ],
    runtime: "2h 3m",
    popularity: 80,
    poster: "https://placehold.co/300x450",
  },
  {
    id: "m2",
    title: "Movie Title 2",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae error ipsam suscipit eius fugiat veritatis iure aperiam temporibus aspernatur sequi. Molestiae ipsa error optio tenetur dignissimos consequatur nisi itaque minima!",
    releaseDate: "01/01/1900",
    genres: [
      {
        id: "g1",
        name: "Genre 1",
      },
      {
        id: "g2",
        name: "Genre 2",
      },
    ],
    createdBy: [
      {
        id: "c1",
        name: "Creator Name 1",
        role: "Director",
      },
    ],
    runtime: "2h 3m",
    popularity: 70,
    poster: "https://placehold.co/300x450",
  },
  {
    id: "m1",
    title: "Movie Name 1",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae error ipsam suscipit eius fugiat veritatis iure aperiam temporibus aspernatur sequi. Molestiae ipsa error optio tenetur dignissimos consequatur nisi itaque minima!",
    releaseDate: "01/01/1900",
    genres: [
      {
        id: "g1",
        name: "Genre 1",
      },
      {
        id: "g2",
        name: "Genre 2",
      },
      {
        id: "g3",
        name: "Genre 3",
      },
    ],
    createdBy: [
      {
        id: "c1",
        name: "Creator Name 1",
        role: "Director",
      },
      {
        id: "c2",
        name: "Creator Name 2",
        role: "Writer",
      },
      {
        id: "c3",
        name: "Creator Name 3",
        role: "Writer",
      },
    ],
    runtime: "2h 3m",
    popularity: 80,
    poster: "https://placehold.co/300x450",
  },
  {
    id: "m2",
    title: "Movie Title 2",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae error ipsam suscipit eius fugiat veritatis iure aperiam temporibus aspernatur sequi. Molestiae ipsa error optio tenetur dignissimos consequatur nisi itaque minima!",
    releaseDate: "01/01/1900",
    genres: [
      {
        id: "g1",
        name: "Genre 1",
      },
      {
        id: "g2",
        name: "Genre 2",
      },
    ],
    createdBy: [
      {
        id: "c1",
        name: "Creator Name 1",
        role: "Director",
      },
    ],
    runtime: "2h 3m",
    popularity: 70,
    poster: "https://placehold.co/300x450",
  },
];

export const DUMMY_TOP_RATED_MOVIES = [
  {
    id: "m1",
    title: "Movie Name 1",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae error ipsam suscipit eius fugiat veritatis iure aperiam temporibus aspernatur sequi. Molestiae ipsa error optio tenetur dignissimos consequatur nisi itaque minima!",
    releaseDate: "01/01/1900",
    genres: [
      {
        id: "g1",
        name: "Genre 1",
      },
      {
        id: "g2",
        name: "Genre 2",
      },
      {
        id: "g3",
        name: "Genre 3",
      },
    ],
    createdBy: [
      {
        id: "c1",
        name: "Creator Name 1",
        role: "Director",
      },
      {
        id: "c2",
        name: "Creator Name 2",
        role: "Writer",
      },
      {
        id: "c3",
        name: "Creator Name 3",
        role: "Writer",
      },
    ],
    runtime: "2h 3m",
    popularity: 80,
    poster: "https://placehold.co/300x450",
  },
  {
    id: "m2",
    title: "Movie Title 2",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae error ipsam suscipit eius fugiat veritatis iure aperiam temporibus aspernatur sequi. Molestiae ipsa error optio tenetur dignissimos consequatur nisi itaque minima!",
    releaseDate: "01/01/1900",
    genres: [
      {
        id: "g1",
        name: "Genre 1",
      },
      {
        id: "g2",
        name: "Genre 2",
      },
    ],
    createdBy: [
      {
        id: "c1",
        name: "Creator Name 1",
        role: "Director",
      },
    ],
    runtime: "2h 3m",
    popularity: 70,
    poster: "https://placehold.co/300x450",
  },
  {
    id: "m1",
    title: "Movie Name 1",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae error ipsam suscipit eius fugiat veritatis iure aperiam temporibus aspernatur sequi. Molestiae ipsa error optio tenetur dignissimos consequatur nisi itaque minima!",
    releaseDate: "01/01/1900",
    genres: [
      {
        id: "g1",
        name: "Genre 1",
      },
      {
        id: "g2",
        name: "Genre 2",
      },
      {
        id: "g3",
        name: "Genre 3",
      },
    ],
    createdBy: [
      {
        id: "c1",
        name: "Creator Name 1",
        role: "Director",
      },
      {
        id: "c2",
        name: "Creator Name 2",
        role: "Writer",
      },
      {
        id: "c3",
        name: "Creator Name 3",
        role: "Writer",
      },
    ],
    runtime: "2h 3m",
    popularity: 80,
    poster: "https://placehold.co/300x450",
  },
  {
    id: "m2",
    title: "Movie Title 2",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae error ipsam suscipit eius fugiat veritatis iure aperiam temporibus aspernatur sequi. Molestiae ipsa error optio tenetur dignissimos consequatur nisi itaque minima!",
    releaseDate: "01/01/1900",
    genres: [
      {
        id: "g1",
        name: "Genre 1",
      },
      {
        id: "g2",
        name: "Genre 2",
      },
    ],
    createdBy: [
      {
        id: "c1",
        name: "Creator Name 1",
        role: "Director",
      },
    ],
    runtime: "2h 3m",
    popularity: 70,
    poster: "https://placehold.co/300x450",
  },
  {
    id: "m1",
    title: "Movie Name 1",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae error ipsam suscipit eius fugiat veritatis iure aperiam temporibus aspernatur sequi. Molestiae ipsa error optio tenetur dignissimos consequatur nisi itaque minima!",
    releaseDate: "01/01/1900",
    genres: [
      {
        id: "g1",
        name: "Genre 1",
      },
      {
        id: "g2",
        name: "Genre 2",
      },
      {
        id: "g3",
        name: "Genre 3",
      },
    ],
    createdBy: [
      {
        id: "c1",
        name: "Creator Name 1",
        role: "Director",
      },
      {
        id: "c2",
        name: "Creator Name 2",
        role: "Writer",
      },
      {
        id: "c3",
        name: "Creator Name 3",
        role: "Writer",
      },
    ],
    runtime: "2h 3m",
    popularity: 80,
    poster: "https://placehold.co/300x450",
  },
  {
    id: "m2",
    title: "Movie Title 2",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae error ipsam suscipit eius fugiat veritatis iure aperiam temporibus aspernatur sequi. Molestiae ipsa error optio tenetur dignissimos consequatur nisi itaque minima!",
    releaseDate: "01/01/1900",
    genres: [
      {
        id: "g1",
        name: "Genre 1",
      },
      {
        id: "g2",
        name: "Genre 2",
      },
    ],
    createdBy: [
      {
        id: "c1",
        name: "Creator Name 1",
        role: "Director",
      },
    ],
    runtime: "2h 3m",
    popularity: 70,
    poster: "https://placehold.co/300x450",
  },
];
