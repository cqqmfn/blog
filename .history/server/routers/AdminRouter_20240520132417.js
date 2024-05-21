const express = require("express")
const router = express.Router()

const {db,genid} = require("../database/DbUtils")

router.post("/login")

module.exports = router
