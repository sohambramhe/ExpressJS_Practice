// Allow React Frontend
const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors({
    origin: 'http://localhost:5173'
}));
server.use(express.json());
server.get('/api/users', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Users API'
    });
});
server.listen(3000, () => {
    console.log('Server Running PORT 3000');
});