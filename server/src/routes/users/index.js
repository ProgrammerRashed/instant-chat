import express from "express";
import { verifyToken } from "../../middlewares/verifyToken.js";
import { getActiveUser } from "../../api/users/controllers/getActiveUser.js";
import { getAllFriends } from "../../api/users/controllers/getAllFriends.js";

const router = express.Router();

router.get("/api/user", verifyToken, getActiveUser);
router.get("/api/friends", verifyToken, getAllFriends);

export default router;
