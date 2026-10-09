// Create a Success Response API
const express = require('express');
const app = express();
app.get('/success', (req, res) => {
    res.status(200).send("Success");
});
app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});