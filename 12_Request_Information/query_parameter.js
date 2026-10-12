// Product Search Query
const express = require('express');
const server = express();
server.get('/products', (req, res) => {
    res.send(`Category: ${req.query.category}`);
});
server.listen(3000, () => {
    console.log("Server Running PORT 3000");
});