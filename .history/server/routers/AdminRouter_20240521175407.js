const express = require("express")
const router = express.Router()
const {v4:uuidv4} = require("uuid")
const {db,genid} = require("../database/DbUtils")

router.post("/login",async (req,res)=>{
  let {account,password} = res.body;
  let {err,rows} = await db.async.all("select * from `admin` where `account` = ? AND `password` = ?",[account,password])

  if(err == null && rows.length > 0){

    let login_token = uuidv4();
    let update_token_sql = "UPDATE `admin` SET `token` = ? where `id` = ?";

    await db.async.run(update_token_sql,[login_token,rows[0].id]);

    let login_info = rows[0];
    l

    res.send({
      code:200,
      msg:"登陆成功",

    })
  }else{
    res.send({
      code:500,
      msg:"登陆失败"
    })
  }
})

module.exports = router
