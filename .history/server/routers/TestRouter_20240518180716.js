const express = require("express")
const router = express.Router()
const 

router.get("/test",(res,req)=>{
  res.send("test")
})

module.exports = router
