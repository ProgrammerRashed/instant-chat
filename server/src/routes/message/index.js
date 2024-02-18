const doSomething = require("../../api/message/controllers/doSomething")
const getMessages = require("../../api/message/controllers/getMessages")
const sendMessage = require("../../api/message/controllers/sendMessage")
const verifyToken = require("../../middlewares/verifyToken")

const router = require("express").Router()

router.get("/:id",verifyToken, getMessages)
router.post("/api/send/:id", verifyToken, sendMessage)
module.exports = router