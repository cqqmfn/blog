/** 
 * 需要安装的模块
 * "multer"：处理上传功能的中间件
 * "sqlite3":服务端需要数据库：方便移植
 * "uuid":生成唯一的标志
**/ 

// 引进express
const express = require("express")
//引进上传
const multer = require("multer")
// 实例化express
const app = express();

// 定义一个端口
const port = 8080

//开放跨域请求
app.use(function(req,res,next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","*");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  if(req.method == "OPTION") res.sendStatus(200)//让options尝试请求快速结束
  else next();
});

// 引入中间件进行解析（要写在路由前面）
app.use(express.json())

const update = {
  dest:"./"
}

// 写一个helloworld的接口
app.get("/",(req,res)=>{
  res.send("hello world");
})

app.listen(port,()=>{
  console.log(`启动成功：http://localhost:${port}/`)
})