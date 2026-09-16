// Create a Server Health Check Route
const express = require('express');

const app = express();

app.get('/users', (req, res) => {
    res.statusCode = 200;
    res.json([
        {
            "id": 101,
            "name": "Vedant",
            "role": "MERN Developer"
        },
        {
            "id": 102,
            "name": "Rahul",
            "role": "Frontend Developer"
        }
    ]);
});

app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});