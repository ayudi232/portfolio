const http = require("http");
const fs = require("fs");
const path = require("path");
const mime = require("mime-types");
const server = http.createServer((req,res)=>{
// const sendFile = (reqUrl == "/") ? "index.html" : reqUrl;
let filePath;

if (req.url == "/") {
   filePath = path.join(__dirname,"portfolio","index.html") 
}else{
const reqUrl = req.url.slice(1);
    filePath = path.join(__dirname,"portfolio","src",reqUrl)
}
const contentTYpe = mime.lookup(filePath) || "text/html";

fs.readFile(filePath,(err,data)=>{
  if (err) {
    const errorPath = path.join(__dirname,"portfolio","src","404.html")
    fs.readFile(errorPath,(errErr,erordata)=>{
        if (errErr) {
            console.log(errErr.message);
        }else{
            res.writeHead(404,{"content-type":"text/html"})
            return res.end(erordata)
        }
    })
  }else{
       console.log(data);
  res.writeHead(200,{"content-type":contentTYpe});
  res.end(data)
  } 

})
})
server.listen(2000,()=>{console.log("server runing out....");
})

