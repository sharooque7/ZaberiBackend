import express from "express";
const Router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

Router.route("/").post(registerUser);
Router.get("/", protect, admin, getUsers);
Router.post("/login", authUser);
Router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);
Router.route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default Router;
