// Create Users, Products, and Orders Routes using Express.js
const express = require('express');
const app = express();
app.get('/users', (req, res) => {
    res.send("User List");
});
app.get('/products', (req, res) => {
    res.send("Products List");
});
app.get('/orders', (req, res) => {
    res.send("Orders List");
});
app.listen(3000, () => {
    console.log("server running PORT 3000");
});