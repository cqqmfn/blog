const sqlite3 = require("sqlite3").verbose()
const path = require("path")
const GenId = require("../utils/SnowFlake")

var db = new sqlite3.Database(path.join(__dirname,"blog.sqlite3"))
const genid = new GenId({WorkerId:1})

db.async = {}

db.async.all = (sql,params)=>{
  db.all(sql,params,(err,rows)=>{
    
  })
}
module.exports = {db,genid}