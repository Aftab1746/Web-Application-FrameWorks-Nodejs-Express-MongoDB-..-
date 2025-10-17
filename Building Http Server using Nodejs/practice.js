const http = require("http")

const server = http.createServer((req,res)=>{
const urlData = req.url;
console.log(urlData)
res.end("Url Information")

});
server.listen(5000, ()=>{
    
}
)