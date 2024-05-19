const sqlite3 = require("sqlite3").verbose()
const path = require("path")
const RootId = require("../utils/SnowFlake")

var db = new sqlite3.Database(path.join(__dirname,"blog.sqlite3"))
const rootid = new RootId({WorkerId:1})