const http = require('http')

const server = http.createServer()
server.on('request', (req, res) => {
    res.end(`
        <h1>Welcome Oma</h1>
    `)
})

server.listen(5000)