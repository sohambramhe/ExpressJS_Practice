// Get User ID and Order ID using Multiple Route Parameters
const express = require('express');
const app = express();
app.get('/users/:id/orders/:orderId', (req, res) => {
    res.send(`User ID: ${req.params.id}, Order ID: ${req.params.orderId}`);
})
app.listen(3000, () => {
    console.log("server running PORT 3000");
});