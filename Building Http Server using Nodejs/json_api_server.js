//4️⃣ Create a JSON API Endpoint
//Make a Node.js server that:
//When /data is requested, sends a JSON response like:
//{ "name": "Aftab", "course": "WAF", "year": 2025 }
//When any other path is requested, respond with "Invalid endpoint".

const http = require("http")

const myServer = http.createServer((req, res) => {
    const dataObj = {
        Name: "Aftab Burki",
        Age: 23,
        Course: "WAF",
        Year: 2025
    };
    const urlName = req.url.toLocaleLowerCase();
    switch (urlName) {
        case '/data':
            const jsondata = JSON.stringify(dataObj);
            res.writeHead(200, { "content-Type": "Application/json" });
            res.end(jsondata);
            break;

        default:
            res.end("Invalid Endpoint")
            break;
    }
})
myServer.listen(9000, () => {
    console.log("Sever Started ")
})