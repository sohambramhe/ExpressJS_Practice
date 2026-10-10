// Create a Product Router with Multiple Routes
// product-router.js
const express = require('express');
const productRouter = express.Router();
productRouter.get('/', (req, res) => {
    res.send("Product List");
});
productRouter.get('/101', (req, res) => {
    res.send("Product Details");
});
module.exports = productRouter;