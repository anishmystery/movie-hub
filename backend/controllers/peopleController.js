import {
  DUMMY_CREDITS,
  DUMMY_PEOPLE,
  DUMMY_POPULAR_PEOPLE,
} from "../data/dummyPeople.js";

export function getPersonById(req, res, next) {
  const { id } = req.params;
  const person = DUMMY_PEOPLE.find((p) => p.id === id);
  const credits = DUMMY_CREDITS.find((c) => c.id === id);
  if (!person) {
    res.json({ message: "Could not find the person for the given id" });
    return next();
  }
  res.json({
    ...person,
    credits: { cast: credits?.cast, crew: credits?.crew },
  });
}

export function getPopularPeople(req, res, next) {
  if (DUMMY_POPULAR_PEOPLE.length === 0) {
    res.json({ message: "No popular people found!" });
    return next();
  }
  res.json({
    popular: { people: DUMMY_POPULAR_PEOPLE },
  });
}
