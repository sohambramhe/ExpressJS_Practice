// Create User API with 201 Created Status
const express = require('express');
const app = express();
app.post('/users', (req, res) => {
    res.status(201).json({
        "message": "User Created"
    });
});
app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});