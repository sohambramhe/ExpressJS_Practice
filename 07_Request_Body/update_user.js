// Update User using Request Body
const express = require('express');
const app = express();
app.use(express.json());
app.put('/users/101', (req, res) => {
    res.json(req.body);
});
app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});