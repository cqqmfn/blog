const express = require("express")
const router = express.Router()
const {v4: uuidv4} = require("uuid")
const {db,genid} = require("../database/DbUtils")

router.post("/login",async (req,res)=>{

  let {account,password} = res.body;
  let {err,rows} = await db.async.all("select * from `admin` where `account` = ? AND `password` = ?",[account,password])

  if(res)
})

module.exports = router
