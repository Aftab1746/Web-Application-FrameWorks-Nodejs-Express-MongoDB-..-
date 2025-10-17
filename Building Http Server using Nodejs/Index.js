// Create an HTTP server in Node.js using the http.createServer() 
// function that listens on a specific port. Each time a client
//  makes a request, the server should record the current date 
// and time of the request (using toLocaleString()) and
//  append this information to a file named log.txt.

const http = require("http");
const fs = require("fs");

// Creating HTTP Server
const myServer = http.createServer((req,res)=>{
const now = new Date();
 const log = `New req received at path: ${req.url}: at ${now.toLocaleString()}\n`
 fs.appendFile("log.txt", log, (err)=>{
  if(err){
     console.log("error:", err)
  }
  else {
    console.log("Log file updated!");
  }
 })
 res.end("Server Started Succesfully")
});

// It Listen to the server at Port Number
myServer.listen(8000, ()=>{
     console.log("Server is listening on port 6000...");
})