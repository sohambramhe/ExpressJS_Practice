// Production Express Server
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());
server.get('/api/users', (req, res) => {
    res.status(200).json({
        "success": true,
        "message": "Users API Working"
    });
});
// 404 Handler — routes ke BAAD
server.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});
// Error Handler — 404 ke baad
server.use((error, req, res, next) => {
    res.status(500).json({
        success: false,
        message: error.message
    });
});
server.listen(3000, () => {
    console.log("Server Running Port 3000");
});