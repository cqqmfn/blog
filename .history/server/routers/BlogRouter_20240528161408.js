const express = require("express")
const router = express.Router()
const {db,genid} = require("../database/DbUtils")

//添加博客
router.post("/add",async (req,res)=>{
  let { title,categoryId,content } = req.body;
  let id = genid.NextId()
  let create_time = new Date().getTime()

  const insert_sql = "INSERT INTO `blog`(`id`,`category_id`,`content`,`create_time`) VALUES (?,?,?,?,?)"
})
//修改博客
//删除博客
//查询博客

module.exports = router
