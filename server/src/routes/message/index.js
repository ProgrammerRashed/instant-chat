const doSomething = require("../../api/message/controllers/doSomething")
const sendMessage = require("../../api/message/controllers/sendMessage")
const verifyToken = require("../../middlewares/verifyToken")

const router = require("express").Router()


router.post("/api/send/:id", verifyToken, sendMessage)
module.exports = router