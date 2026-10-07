// Create a middleware that prints
const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log("Middleware Running");
    next();
});
app.get('/', (req, res) => {
    res.send("Home Page");
});
app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});