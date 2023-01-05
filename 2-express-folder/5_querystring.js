const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <a href="/api/products">Api page</a>
    `)
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
      const { id, name, image } = product
      return { id, name, image }
    })
  
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params

    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    )

    if (!singleProduct) {
        return res.status(404).send('Product not found')
    }
    return res.json(singleProduct)    
})

app.get('/api/v1/query', (res, req) => {
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter(() => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({ sucess: true, data: [] })        
    }

    res.status(200).json(sortedProducts)
    res.send('Hello Oma')
})

app.listen(5000, () => {
    console.log('App is listening at port 5000...');
})