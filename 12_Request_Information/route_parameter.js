// User ID Details
const express = require('express');
const server = express();
server.get('/users/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});
server.listen(3000, () => {
    console.log("Server Running PORT 3000");
});