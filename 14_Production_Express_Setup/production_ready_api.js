// Production-Ready Express API
const express = require('express');
const api = express();
const cors = require('cors');
const helmet = require('helmet');
api.use(cors());
api.use(helmet());
api.use(express.json());
api.get('/api/users', (req, res) => {
    res.status(200).json({
        "success": true,
        "message": "Users API Working"
    })
});
api.get('/api/error', (req, res, next) => {
    next(new Error("Database Error"));
});
api.use((req, res, next) => {
    res.status(404).json({
        "success": false,
        "message": "Route Not Found"
    });
});
api.use((err, req, res, next) => {
    res.status(500).json({
        "success": false,
        "message": err.message,
    });
});
api.listen(3000, () => {
    console.log("Server Running PORT 3000");
});