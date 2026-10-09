// Return User Details with 200 Status
const express = require('express');
const app = express();
app.get('/users/101', (req, res) => {
    res.status(200).json({
        "id": 101,
        "name": "Vedant"
    });
});
app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});