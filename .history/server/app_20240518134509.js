/** 
 * 需要安装的模块
 * "multer"：处理上传功能的中间件
 * "sqlite3":服务端需要数据库：方便移植
 * "uuid":生成唯一的标志
**/ 

// 引进express
const express = require("express")
// 实例化express
const app = express();

// 定义一个端口
const port = 8080

// 引入中间件（要写在路由前面）
app.use(express.json())

// 开放跨域请求
app.use(function(req,res,next){
  //设置跨域的域名，*代表任意类型
  res.header("Access-Control-Allow-Origin","*");
  //设置header的类型
  res.header("Access-Control-Allow-header","*");
  //设置跨域的方式
  res.header("Access-Control-Allow-Method","DELETE,PUT,OPTION");
  if(res.method == )
})

// 写一个helloworld的接口
app.get("/",(req,res)=>{
  res.send("hello world");
})

app.listen(port,()=>{
  console.log(`启动成功：http://localhost:${port}/`)
})