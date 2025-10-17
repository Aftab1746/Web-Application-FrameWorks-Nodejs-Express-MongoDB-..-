const http = require("http")
const myServer = http.createServer((req,res)=>{
const logClient = `New Client Connected`;
fs.appendFile("log1.txt", logClient,(err)=>{
    if(err){
        console.log("Error: ", err)
    }
    else{
        console.log("Server Started Succesfully")
    }
       //Responds with "Welcome to my first Node.js server!".
res.end("Welcome to my first Node.js server!")
})
})

//Listens on port 5000.
myServer.listen(5000,()=>{
 console.log("Sever Started ")
})