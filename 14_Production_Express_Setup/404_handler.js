// Express 404 Handler
const express = require('express');
const server = express();
server.get('/api/users', (req, res) => {
    res.status(200).send("Users List");
});
server.use((req, res) => {
    res.status(404).json({
        "success": false,
        "message": "Route Not Found"
    })
});
server.use((err, req, res, next) => {
    res.status(500).send(err.message);
});
server.listen(3000, () => {
    console.log("Server Running PORT 3000");
});