// Create Home, About, and Contact Routes
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.send("Home Page");
});

app.get('/about', (req, res) => {
    res.statusCode = 200;
    res.send("About Page");
});

app.get('/contact', (req, res) => {
    res.statusCode = 200;
    res.send("Contact Page");
});

app.listen(3000, () => {
    console.log("PORT 3000");
});