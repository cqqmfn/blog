const express = require("express")
const router = express.Router()
const {db,genidid} = require("../database/DbUtils")

router.get("/test",(req,res)=>{
  res.send({
    id
  })
})

module.exports = router
