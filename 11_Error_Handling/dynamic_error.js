// Dynamic Error Handler
const express = require('express');
const app = express();
app.get('/error', (req, res, next) => {
    next(new Error("Database Connection Failed"));
});
app.use((error, req, res, next) => {
    res.status(500).send(error.message);
});
app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});