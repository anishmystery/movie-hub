import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import homeRouter from "./routes/home.js";
import searchResultsRouter from "./routes/searchResults.js";
import movieRouter from "./routes/movie.js";
import tvShowRouter from "./routes/tvShow.js";
import peopleRouter from "./routes/people.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware to parse any incoming request's body as JSON
app.use(bodyParser.json());

// CORS middleware
app.use(cors(corsOptions));

// Router middleware
app.use("/api", homeRouter);
app.use("/api/search", searchResultsRouter);
app.use("/api/movie", movieRouter);
app.use("/api/tv", tvShowRouter);
app.use("/api/person", peopleRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// Sample route
// app.get("/", (req, res, next) => {
//   res.json({ message: "API is running..." });
// });

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
