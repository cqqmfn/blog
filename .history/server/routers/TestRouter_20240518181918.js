const express = require("express")
const router = express.Router()
const {db,id} = require("../database/DbUtils")

router.get("/test",(res,req)=>{
  res.send("test")
})

module.exports = router
