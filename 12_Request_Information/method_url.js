// Request Method & URL
const express = require('express');
const server = express();
server.get('/users', (req, res) => {
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.url}`);
    res.send("Users List");
});
server.listen(3000, () => {
    console.log("Server Running PORT 3000");
});