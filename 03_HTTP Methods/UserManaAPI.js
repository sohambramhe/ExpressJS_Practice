// Create Complete User Management API using HTTP Methods
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("User Management API");
});
app.get('/users', (req, res) => {
    res.send("User List");
});
app.get('/users/101', (req, res) => {
    res.send("User Details");
});
app.post('/users', (req, res) => {
    res.send("User Created");
});
app.put('/users/101', (req, res) => {
    res.send("User Updated");
});
app.patch('/users/101', (req, res) => {
    res.send("User Partially Updated");
});
app.delete('/users/101', (req, res) => {
    res.send("User Deleted");
});
app.listen(3000, () => {
    console.log("server running PORT 3000");
});