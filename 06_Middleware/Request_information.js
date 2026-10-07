// Request Information Middleware
const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log(`Method: ${req.method}, URL: ${req.url}`);
    next();
});
app.get('/users', (req, res) => {
    res.send("Users List");
});
app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});