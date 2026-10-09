// Create Product API with 201 Created Status
const express = require('express');
const app = express();
app.use(express.json());
app.post('/products', (req, res) => {
    res.status(201).json({
        "name": "Laptop",
        "price": 50000
    });
});
app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});
