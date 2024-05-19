const express = require("express")
const router = express.Router()
co

router.get("/test",(res,req)=>{
  res.send("test")
})

module.exports = router
