const express = require("express")
const router = express.Router()
const {db,genidid} = require("../database/DbUtils")

router.get("/test",(req,req)=>{
  res.send("test")
})

module.exports = router
