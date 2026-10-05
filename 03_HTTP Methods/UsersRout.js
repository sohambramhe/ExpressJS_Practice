// Create Home and Users Routes using Express.js
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Home Page");
});
app.get('/users', (req, res) => {
    res.send("Users Page");
});
app.listen(3000, () => {
    console.log("server running PORT 3000");
});