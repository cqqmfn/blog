const express = require("express")
const router = express.Router()
const {db,genidid} = require("../database/DbUtils")

router.get("/test",(req,res)=>{
  db.all("select * from `admin`",[],(err,rows)=>{
    console.log()
  })
  res.send({
    id:genid.NextId()
  })
})

module.exports = router
