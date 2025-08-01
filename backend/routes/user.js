import express from "express";
import {
  addToFavourites,
  addToWatchlist,
  getUserById,
  getUserReviews,
  removeFromWatchlist,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/:id", getUserById);

userRouter.get("/:id/reviews", getUserReviews);

userRouter.post("/watchlist", addToWatchlist);

userRouter.delete("/watchlist/:id", removeFromWatchlist);

userRouter.post("/favourite", addToFavourites);

export default userRouter;
