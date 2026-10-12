// Create User
const express = require('express');
const server = express();
server.use(express.json());
server.post('/users', (req, res) => {
    res.send(`Name: ${req.body.name}, Role: ${req.body.role}`);
});
server.listen(3000, () => {
    console.log("Server Running PORT 3000");
});