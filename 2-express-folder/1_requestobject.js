const http = require('http')
const { readFileSync } = require('fs')

const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    } else if (url === '/about'){
        res.writeHead(200, { 'content-type': 'text/html'})
        res.write(`
            <h1>About Page</h1>
            <a href="/">home page</a>
        `)
        res.end()
    } else {
        res.writeHead(404, { 'content-type': 'text/html'})
        res.write(`
            <h1>Oops! 404 Error page</h1>
            <a href="/"> back to home page</a>
        `)
        res.end()
    }
})

server.listen(5000)