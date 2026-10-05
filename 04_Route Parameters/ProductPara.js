// Get Product ID using Route Parameters
const express = require('express');
const app = express();
app.get('/products/:id', (req, res) => {
    res.send(req.params.id);
});
app.listen(3000, () => {
    console.log("server running PORT 3000");
});