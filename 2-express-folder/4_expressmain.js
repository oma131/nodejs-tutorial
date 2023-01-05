const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send(`
    <h1>Page Not Found</h1>
    <a href="/">back to home page</a>
    `)
})



app.listen(5000, () => {
    console.log("App is listening at https://localhost:5000");
})