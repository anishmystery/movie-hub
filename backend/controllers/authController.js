import { DUMMY_USERS } from "../data/dummyUsers.js";

export function login(req, res, next) {
  const { email, password } = req.body;
  const existingUser = DUMMY_USERS.find((user) => user.email === email);
  if (!existingUser || existingUser.password !== password) {
    res.json({
      message: "Could not find the user, incorrect credentials.",
    });
    return next();
  }
  res.json({ message: "Login successful!" });
}

export function signup(req, res, next) {
  const { name, email, password } = req.body;
  const existingUser = DUMMY_USERS.find((user) => user.email === email);
  if (existingUser) {
    res.json({ message: "Existing user, please log in!" });
    return next();
  }
  const newUser = {
    id: `u${DUMMY_USERS.length + 1}`,
    name,
    email,
    password,
  };
  DUMMY_USERS.push(newUser);
  res.json({ message: "Signup successful!" });
}
