const doLogin = require("../../api/authentication/controllers/doLogin")
const doLogout = require("../../api/authentication/controllers/doLogout")
const doSignup = require("../../api/authentication/controllers/doSignup")
const getUser = require("../../api/authentication/controllers/getUser")

const router = require("express").Router()

//Routes
router.post("/signup", doSignup)
router.post("/login", doLogin)
router.post("/logout", doLogout)
router.post("/user", getUser)

module.exports = router