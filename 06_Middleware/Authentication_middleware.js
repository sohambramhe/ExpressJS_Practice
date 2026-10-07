// Authentication Middleware
const express = require('express');
const app = express();
app.use((req, res, next) => {
    if (req.query.token === "12345") {
        console.log("Access Granted");
        next();
    } else {
        res.send("Access Denied");
    }
});
app.get('/admin', (req, res) => {
    res.send("Access Granted");
});
app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});