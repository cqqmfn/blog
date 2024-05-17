/** 
 * 需要安装的模块
 * "multer"：处理上传功能的中间件
 * "sqlite3":服务端需要数据库：方便移植
 * "uuid"
**/ 


// 引进express
const express = require("express")
// 实例化express
const app = express();

// 定义一个端口
const port = 8080

// 写一个helloworld的接口
app.get("/",(req,res)=>{
  res.send("hello world");
})

app.listen(port,()=>{
  console.log(`启动成功：http://localhost:${port}/`)
})