const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send(`
        <h1>Welcome to the Home Page</h1>
        <a href="/about">about page</a>
    `)
})
app.get('/about', (req, res) => {
    res.status(200).send(`
        <h1>This is the About Page</h1>
        <a href="/">home page</a>
    `)
})
app.all('*', (req, res) => {
    res.status(404).send(`
        <h1>Oops! Page cannot be found</h1>
        <a href="/">back to home page page</a>
    `)
})


app.listen(5000, () => {
    console.log("App is listening at https://localhost:5000");
})