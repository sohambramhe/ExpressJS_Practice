// Centralized Error Handler
const express = require('express');
const server = express();
server.get('/api/error', (req, res, next) => {
    next(new Error("Database Connection Failed"));
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