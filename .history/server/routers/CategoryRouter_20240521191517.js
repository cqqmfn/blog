const express = require("express")
const router = express.Router()
const {db,genid} = require("../database/DbUtils")

router.get("/test",async(req,res)=>{

  let out = await db.async.all("select * from `admin`",[]);

  res.send({
    id:genid.NextId(),
    out//相当于out:out
  })
})

module.exports = router
