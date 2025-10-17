//3️⃣Create a server that:
//Responds "Welcome to Home Page" for /.
//Responds "About Us Page" for /about.
//Responds "404 Not Found" for all other routes

const fs = require("fs")
const http = require("http")
const myServer = http.createServer((req, res) => {
    const urlName = req.url; //const urlName = req.url.toLowerCase(); // makes routes case-insensitive
    switch (urlName) {
        case "/":
            res.end(`Welcome to Home Page for `)
            break;

        case "/About":
            res.end(`Welcome to About Us Page  `)
            break;

        case "/Contact":
            res.end(`Welcome to About Contact Page `)
            break;
        default:
            res.end(`404 Not Found`)
    }
})

myServer.listen(7000, () => {
console.log("Server Run Successfully at Port 7000")
})