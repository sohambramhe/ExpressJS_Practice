// Complete Express Error Handling
const express = require('express');
const server = express();
server.get('/', (req, res) => {
    res.send("Home Page");
});
server.get('/api/error', (req, res, next) => {
    next(new Error("Server Error"));
});
server.use((req, res, next) => {
    res.status(404).json({
        "success": false,
        "message": "Route Not Found"
    })
});
server.use((err, req, res, next) => {
    res.status(500).json({
        "success": false,
        "message": err.message,
    })
});
server.listen(3000, () => {
    console.log("Server Running PORT 3000");
});