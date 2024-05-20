const express = require("express")
const router = express.Router()
const {db,genid} = require("../database/DbUtils")

router.get("/test",(req,res)=>{
  db.all("select * from `admin`",[],(err,rows)=>{
    console.log(rows)
  })

  db.async.all("select * from `admin`",[]).then((res)=>{
    console.log(res)
  })

  let out = await db.async("select * from `admin`",[]);

  res.send({
    id:genid.NextId()
  })
})

module.exports = router
