const sqlite3 = require("sqlite3")
const path = require("path")
const RootId = require("")

var db = new sqlite3.Database(path.join(__dirname,"blog.sqlite3"))
const rootid = RootId{Wor}