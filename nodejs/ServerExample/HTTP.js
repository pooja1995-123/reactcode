var http=require('http');
var server=http.createServer((req,res)=>{
    res.write("<h1>Hello EveryOne</h1>");
    res.end();
});
server.listen(3020,(err)=>{
    if(err) throw err;
    console.log("server running");
})