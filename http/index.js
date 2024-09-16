//hpp is an async event and non bloacking 
const http=require('http');
const  fs=require('fs');
http.createServer((req,res)=>{
if(req.url=='/index.html'){
    res.setHeader("content-type","text/html");
    // console.log(req.url);
    res.write(givemeurl(req.url,'utf-8'));
    res.end();
}
else if(req.url=='/about.html'){
    res.setHeader("content-type","text/html");
   res.write(givemeurl(req.url,'utf-8'));
   res.end();
}
else if(req.url=='/index.css'){
    res.setHeader("content-type","text/css");
   res.write(givemeurl(req.url,'utf-8'));
   res.end();
}
else if(req.url=='/01.jpg'){
    res.setHeader("content-type","image/jpeg");
   res.write(givemeurl(req.url,null));
   res.end();
}
else if(req.url=='/code.js'){
    res.setHeader("content-type","application/javascript");
   res.write(givemeurl(req.url,'utf-8'));
   res.end();
}
else{
    res.setHeader("content-type","text/html");
   res.write("<h1>404 page not found</h1>")
}
}).listen(3000,()=>{
    console.log("server started 3000");
}).on('error',(err)=>{
    console.log("Server crashed",err);
});
function givemeurl(req,encoading){
    let path="."+req;
    // console.log(path);
    return fs.readFileSync(path,encoading);
}