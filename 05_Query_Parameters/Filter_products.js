// Filter Products by Category using Query Parameters
const express = require('express');
const app = express();
app.get('/products', (req, res) => {
    res.send(req.query.category);
});
app.listen(3000, () => {
    console.log("server running PORT 3000");
});