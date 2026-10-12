// Product Details API
const express = require('express');
const server = express();
server.get('/products/:id', (req, res) => {
    res.send(`Product ID: ${req.params.id}, Category: ${req.query.category}`);
});
server.listen(3000, () => {
    console.log("Server Running PORT 3000");
});