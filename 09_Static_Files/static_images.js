// Static Image Server
const express = require('express');
const server = express();
server.use(express.static('public/images'));
server.listen(3000, () => {
    console.log("Server Running PORT 3000");
});