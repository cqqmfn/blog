const express = require("express")
const router = express.Router()
const {v4:uuidv4} = require("uuid")
const {db,genid} = require("../database/DbUtils")

router.post("/login",async (req,res)=>{
 let {account,password} = res.body;
 let 
})

module.exports = router
