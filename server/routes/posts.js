import express from "express";
import { getFeedPosts, getUserPosts, likePost,postComment } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Read
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

// Update
router.patch("/:id/like", verifyToken, likePost);

router.post("/:postId/:userId/comment" , verifyToken, postComment);

export default router;