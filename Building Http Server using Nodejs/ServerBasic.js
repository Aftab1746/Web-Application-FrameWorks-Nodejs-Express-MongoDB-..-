const fs = require("fs")
const http = require("http")

const myServer = http.createServer((req,res)=>{
const date = new Date().toLocaleString();
const logClient = `[${req.method}  Request to ${req.url} at ${date}`;
fs.appendFile("log2.txt", logClient,(err)=>{
    if(err){
        console.log("Error: ", err)
    }
    else{
        console.log("Server Started Succesfully")
    }
       //Respond at server
res.end("Server runs Successfully")
})
})

//Listens on port 4000.
myServer.listen(4000,()=>{
 console.log("Sever Started ")
})