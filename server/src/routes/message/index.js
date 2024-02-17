const doSomething = require("../../api/message/controllers/doSomething")

const router = require("express").Router()


router.get("/message", doSomething)
module.exports = router