// Assets URL Prefix
const express = require('express');
const server = express();
server.use('/assets', express.static('public'));
server.listen(3000, () => {
    console.log("Server Running PORT 3000");
});