// Production Configuration API
const express = require('express');
const helmet = require('helmet');
require('dotenv').config();
const server = express();
const PORT = process.env.PORT || 5000;
server.use(helmet());
server.use(express.json());
server.get('/api/config', (req, res) => {
    res.status(200).json({
        "success": true,
        "message": "Secure API Running"
    });
});
server.listen(PORT, () => {
    console.log("Server Running sucessfully!");
});