// Receive User Name from Request Body
const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
    res.send(req.body.name);
});
app.listen(3000, () => {
    console.log("Server running PORT 3000");
});