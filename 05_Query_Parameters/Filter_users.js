// Filter Users by Role and City using Query Parameters
const express = require('express');
const app = express();
app.get('/users', (req, res) => {
    res.send(`Role: ${req.query.role}, City: ${req.query.city}`);
})
app.listen(3000, () => {
    console.log("server running PORT 3000");
});