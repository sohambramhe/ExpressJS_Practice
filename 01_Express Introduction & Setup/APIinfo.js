// Create a Basic API Information Endpoint
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.send("User Management API");
});

app.get('/users', (req, res) => {
    res.statusCode = 200;
    res.json([{
        id: 101,
        name: "Vedant",
        role: "MERN Developer",
    }, {
        id: 102,
        name: "Rahul",
        role: "Frontend Developer",
    }]);
});

app.get('/users/101', (req, res) => {
    res.statusCode = 200;
    res.json({
        id: 101,
        name: "Vedant",
        role: "MERN Developer",
    });
});

app.listen(3000, () => {
    console.log("Port 3000");
});