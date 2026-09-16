// Create a Server Status API
const express = require('express');

const app = express();

app.get('/products', (req, res) => {
    res.statusCode = 200;
    res.json([
        {
            "id": 1,
            "name": "Laptop",
            "price": 50000
        },
        {
            "id": 2,
            "name": "Phone",
            "price": 20000
        },
        {
            "id": 3,
            "name": "Headphones",
            "price": 3000
        }
    ]);
});

app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});