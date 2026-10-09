// User Not Found Response
const express = require('express');
const app = express();
app.get('/users/999', (req, res) => {
    res.status(404).send("User Not Found");
});
app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});