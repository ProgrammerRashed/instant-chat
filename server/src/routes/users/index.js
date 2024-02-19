const getActiveUser = require("../../api/users/controllers/getActiveUser")
const getAllFriends = require("../../api/users/controllers/getAllFriends")
const verifyToken = require("../../middlewares/verifyToken")

const router = require("express").Router()

router.get("/api/user", verifyToken, getActiveUser)
router.get("/api/friends", verifyToken, getAllFriends)

module.exports = router