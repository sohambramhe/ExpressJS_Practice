// Create a Products API using Express.js
const express = require('express');

const app = express();

app.get('/status', (req, res) => {
    res.statusCode = 200;
    res.send("Server is Active");
});

app.listen(3000, () => {
    console.log("PORT 3000");
});