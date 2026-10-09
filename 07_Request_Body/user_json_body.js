// Create User API using JSON Body
const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
    res.json(req.body);
});
app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});
