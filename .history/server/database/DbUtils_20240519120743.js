const sqlite3 = require("sqlite3").verbose()
const path = require("path")
const GenId = require("../utils/SnowFlake")

var db = new sqlite3.Database(path.join(__dirname,"blog.sqlite3"))
const genid = new GenId({WorkerId:1})

db.sync ={}
module.exports = {db,genid}