const express = require("express")
const router = express.Router()
const {db,rootid} = require("../database/DbUtils")

router.get("/test",(res,req)=>{
  res.send("test")
})

module.exports = router
