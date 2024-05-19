const sqlite3 = require("sqlite3").verbose()
const path = require("path")
const RootId = require("../utils/SnowFlake")

var db = new sqlite3.Database(__dirname,)