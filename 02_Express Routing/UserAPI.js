// Create a Users API using Express.js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Server is Running");
});

app.listen(3000, () => {
    console.log("PORT 3000");
});