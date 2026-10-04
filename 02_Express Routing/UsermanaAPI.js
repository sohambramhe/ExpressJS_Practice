// Create a User Management API
const express = require('express');

const app = express();

app.get('/api', (req, res) => {
    res.statusCode = 200;
    res.json({
        "name": "User Management API",
        "version": "1.0",
        "status": "active"
    })
});

app.listen(3000, () => {
    console.log("PORT 3000");
});