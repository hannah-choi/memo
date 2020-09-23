const http = require("http")
http.createServer((req, res) => {
    res.writeHead(200, {
        'Set-Cookie': ['cookie1=choco', 'userName=A']
    })
    res.end("Cookie")
}).listen(3001)
