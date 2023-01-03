const http = require('http')

const server = http.createServer((req, res) => {
    console.log("User is connected");
    res.end('Home Page')
})

server.listen(5000)