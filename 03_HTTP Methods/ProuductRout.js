// Create Product List and Product Details Routes using Express.js
const express = require('express');
const app = express();
app.get('/products', (req, res) => {
    res.send("Product List");
});
app.get('/products/101', (req, res) => {
    res.send("Product Details");
});
app.listen(3000, () => {
    console.log("server running PORT 3000");
});