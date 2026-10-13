// CORS Enabled API
const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());
server.get('/api/users', (rq, res) => {
    res.status(200).json({
        "success": true,
        "message": "Users API Working"
    });
});
server.listen(3000, () => {
    console.log("Server Running PORT 3000");
});