// Search Users using Query Parameters
const express = require('express');
const app = express();
app.get('/search', (req, res) => {
    res.send(req.query.name);
});
app.listen(3000, () => {
    console.log("server running PORT 3000");
});