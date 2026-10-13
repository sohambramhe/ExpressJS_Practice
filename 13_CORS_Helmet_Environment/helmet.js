// Helmet Security API
const express = require('express');
const helmet = require('helmet');
const server = express();
server.use(helmet());
server.use(express.json());
server.get('/api/security', (req, res) => {
    res.json({
        "success": true,
        "message": "Security Enabled"
    });
});
server.listen(3000, () => {
    console.log("Server Running PORT 3000");
});