const express = require("express")
const router = express.Router()
const {v4:uuidv4} = require("")
const {db,genid} = require("../database/DbUtils")

router.post("/login",async (req,res)=>{

})

module.exports = router
