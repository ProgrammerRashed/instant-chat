const doLogin = require("../../api/authentication/controllers/doLogin")
const doLogout = require("../../api/authentication/controllers/doLogout")
const doSignup = require("../../api/authentication/controllers/doSignup")

const router = require("express").Router()

//Routes
router.post("/signup", doSignup)
router.post("/login", doLogin)
router.post("/logout", doLogout)

module.exports = router