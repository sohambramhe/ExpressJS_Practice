// Return User Details using Dynamic Route Parameters
const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
    res.json({
        id: req.params.id,
        name: "Vedant",
        role: "MERN Developer"
    });
});
app.listen(3000, () => {
    console.log("server running PORT 3000");
});