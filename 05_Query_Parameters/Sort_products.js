// Sort Products using Query Parameters
const express = require('express');
const app = express();
app.get('/products', (req, res) => {
    res.send(`Category: ${req.query.category}, Sort: ${req.query.sort}`);
})
app.listen(3000, () => {
    console.log("server running PORT 3000");
});