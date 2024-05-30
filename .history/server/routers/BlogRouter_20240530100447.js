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

  const delete_sql = "DELETE FROM `blog` WHERE `id`=?"
  let {err,rows} = await db.async.run(delete_sql,[id])
  
  if(err == null){
    res.send({
      code: 200,
      msg: "删除成功"
    })
  }else{
    res.send({
      code: 500,
      msg: "删除失败"
    })
  }
})

//查询博客
router.get("/search",(req,res)=>{
  /**
   * keyword 关键字
   * categoryId 分类编号
   * 
   * 分页:
   * page 页码
   * pageSize 分页大小
   */
  let {keyword,categoryId,page,pageSize} = req.query

  page = page == null ? 1 : page;
  pageSize = pageSize == null ? 10 : pageSize;
  keyword = keyword == null ? "" : keyword;
  categoryId = categoryId == null ? 0 : categoryId;

  //拼装sql条件
  let params = []
  let whereSqls = []
  if(categoryId != 0 ){
    whereSqls.push(" `category_id` = ? ")
    params.push(categoryId)
  }
  if(keyword != ""){
    whereSqls.push(" `title` LIKE ? OR `content` LIKE ? ")
    params.push("%"+keyword+"%")
    params.push("%"+keyword+"%")
  }
  let whereSqlStr = ""
  if(whereSqls.length > 0){
    whereSqlStr = " WHERE " + whereSqls.join(" AND ")
  }

  let searchSql = " SELECT * FROM `blog` " + whereSqlStr + " ORDER BY `create_time` DESC LIMIT ?,? "
  let searchSqlParams = searchSql.concat([(page - 1)*pageSize,pageSize])
})
module.exports = router
