const express = require("express")
const router = express.Router()
const {db,rootid} = require("d")

router.get("/test",(res,req)=>{
  res.send("test")
})

module.exports = router
