const express = require("express")
const router = express.Router()
const {db,genid} = require("../database/DbUtils")

router.get("/test",(res,req)=>{
  res.send("test")
})

module.exports = router