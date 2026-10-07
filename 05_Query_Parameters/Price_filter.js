// Filter Products by Minimum and Maximum Price using Query Parameters
const express = require('express');
const app = express();
app.get('/products', (req, res) => {
    res.send(`Category: ${req.query.category}, Min Price: ${req.query.minPrice}, Max Price: ${req.query.maxPrice}`);
})
app.listen(3000, () => {
    console.log("server running PORT 3000");
});