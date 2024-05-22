const express = require("express")
const router = express.Router()
const {db,genid} = require("../database/DbUtils")

//列表接口
//添加接口
router.post("/add",async (req,res)=>{
  let { name } = req.body
  let insert_sql = "INSERT INTO `category` (id,name) VALUES (?,?)"
  let { err,rows } = await db.async.run(insert_sql,[genid.NextId(),name])

  
})
//修改接口
//删除接口



module.exports = router
