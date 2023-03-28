import express from "express";
import { getUser,getUserFriends } from '../controllers/users.js';
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Read
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);


export default router;