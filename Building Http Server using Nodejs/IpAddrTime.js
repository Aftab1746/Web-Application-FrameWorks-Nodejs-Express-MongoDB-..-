const http = require("http")
const myServer = http.createServer((req,res)=>{
    if (req.url === "/favicon.ico") {
    res.end(); // ignore favicon requests
    return;
  }
 const time = new Date().toLocaleString();
 const IP_Addr = req.socket.remoteAddress;
 const logAddr = `Visitors Ip ${IP_Addr} at ${time} \n`
 fs.appendFile("Visitors.txt", logAddr,(err)=>{
    if(err){
        console.log("Error : ",err)
    }
    else{
        console.log("Server Run, No Error")
    }
 }) 
 res.end("Your visit has been logged!")
});

//Listens on port 4000.
myServer.listen(4000,()=>{
 console.log("Sever Started ")
})