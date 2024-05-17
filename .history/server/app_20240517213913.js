// 引进express
const express = require("express")
// 实例化express
const app = express();

定义一个端口

// 写一个helloworld的接口
app.get("/",(req,res)=>{
  res.send("hello world");
})