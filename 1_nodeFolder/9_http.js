const http = require('http')

const server = http.createServer(( req, res) => {
    if (req.url === '/') {
        res.end(`
            <h1>Welcome to OMA Backend server homepage</h1>
            <a href="/about">About</a>
        `)
        return
    }
    if (req.url === '/about') {
        res.end(`
            <h1>Here is the about page</h1>
            <a href="/">Home</a>
        `)
        return
    }

    res.end(`
        <h1>404 Error</h1>
        <p>The Page you're looking for does not exist</p>
        <a href="/">Back Home</a>
    `)
})

server.listen(5000)