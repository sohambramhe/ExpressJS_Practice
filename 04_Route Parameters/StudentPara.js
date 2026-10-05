// Get Student Name using Route Parameters
const express = require('express');
const app = express();
app.get('/students/:name', (req, res) => {
    res.send(req.params.name);
});
app.listen(3000, () => {
    console.log("server running PORT 3000");
});