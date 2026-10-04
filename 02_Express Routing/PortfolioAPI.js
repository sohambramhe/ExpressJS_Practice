// Create a Portfolio API with Profile and Skills Routes
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.send("Portfolio API Running");
});

app.get('/profile', (req, res) => {
    res.statusCode = 200;
    res.json({
        name: "Vedant",
        role: "Front End Developer",
        experience: "1 Year"
    })
});

app.get('/skills', (req, res) => {
    res.statusCode = 200;
    res.json([
        "HTML",
        "CSS",
        "BOOTSTRAP",
        "REACT",
        "JAVASCRIPT",
    ]);
});

app.listen(3000, () => {
    console.log("PORT 3000");
});