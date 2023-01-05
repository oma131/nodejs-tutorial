const http = require('http')
const { readFileSync } = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const logo = readFileSync('./navbar-app/logo.svg')
const logic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    //home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    } 
    //about page
    else if (url === '/about'){
        res.writeHead(200, { 'content-type': 'text/html'})
        res.write(`
            <h1>About Page</h1>
            <a href="/">home page</a>
        `)
        res.end()
    } 
    // styles
    else if (url === '/styles.css'){
        res.writeHead(200, { 'content-type': 'text/css'})
        res.write(homeStyle)
        res.end()
    }  
    // logo
    else if (url === '/logo.svg'){
        res.writeHead(200, { 'content-type': 'image/svg+xml'})
        res.write(logo)
        res.end()
    }  
    // logo
    else if (url === '/browser-app.js'){
        res.writeHead(200, { 'content-type': 'text/javascript'})
        res.write(logic)
        res.end()
    }  
    //error page
    else {
        res.writeHead(404, { 'content-type': 'text/html'})
        res.write(`
            <h1>Oops! 404 Error page</h1>
            <a href="/"> back to home page</a>
        `)
        res.end()
    }
})

server.listen(5000)