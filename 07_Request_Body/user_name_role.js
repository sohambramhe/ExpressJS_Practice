// Receive User Name and Role from Request Body
const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
    res.send(`Name: ${req.body.name}, Role: ${req.body.role}`);
})
app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});