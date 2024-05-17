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