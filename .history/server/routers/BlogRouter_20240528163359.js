const express = require("express")
const router = express.Router()
const {db,genid} = require("../database/DbUtils")

//添加博客
router.post("/add",async (req,res)=>{
  let { title,categoryId,content } = req.body;
  let id = genid.NextId()
  let create_time = new Date().getTime()

  const insert_sql = "INSERT INTO `blog`(`id`,`title`,`category_id`,`content`,`create_time`) VALUES (?,?,?,?,?)"
  let params = [id,title,categoryId,content,create_time]
  let {err,rows} = await db.async.run(insert_sql,params)
  
  if(err == null){
    res.send({
      code: 200,
      msg: "添加成功"
    })
  }else{
    res.send({
      code: 500,
      msg: "添加失败"
    })
  }
})

//修改博客
router.put("/update",async (req,res)=>{
  let { id,title,categoryId,content } = req.body;

  const update_sql = "UPDATE `blog` SET `title`=?,`content`=?,`category_id`=? WHERE `id`=?"
  let params = [title,content,categoryId,id]
  let {err,rows} = await db.async.run(update_sql,params)
  
  if(err == null){
    res.send({
      code: 200,
      msg: "修改成功"
    })
  }else{
    res.send({
      code: 500,
      msg: "修改失败"
    })
  }
})

//删除博客
router.delete("/delete",async (req,res)=>{
  let id = req.query.id;

  const delete_sql = "DELETE FROM `blog` SET `title`=?,`content`=?,`category_id`=? WHERE `id`=?"
  let params = [title,content,categoryId,id]
  let {err,rows} = await db.async.run(update_sql,params)
  
  if(err == null){
    res.send({
      code: 200,
      msg: "修改成功"
    })
  }else{
    res.send({
      code: 500,
      msg: "修改失败"
    })
  }
})
//查询博客

module.exports = router
