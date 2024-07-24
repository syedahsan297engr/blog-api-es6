import express from "express";
import { authenticateJWT } from "../middlewares/authmiddleware.js";
import {
  getPostsWithComments,
  getPostsByUserWithComments,
  searchPostsByTitleOrContent,
} from "../controllers/post.comment.controller.js";

const router = express.Router();

// Route to get all posts with nested comments
router.get("/", authenticateJWT, getPostsWithComments);

// Route to get posts by user with nested comments
router.get("/user/:user_id", authenticateJWT, getPostsByUserWithComments);
router.get("/search", authenticateJWT, searchPostsByTitleOrContent);

export default router;
