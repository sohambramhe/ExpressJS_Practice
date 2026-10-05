// Create GET, POST, and DELETE User Routes using Express.js
const express = require('express');
const app = express();
app.get('/users', (req, res) => {
    res.send("User List");
});
app.post('/users', (req, res) => {
    res.send("User Created");
});
app.delete('/users/101', (req, res) => {
    res.send("User Deleted");
});
app.listen(3000, () => {
    console.log("server running PORT 3000");
});