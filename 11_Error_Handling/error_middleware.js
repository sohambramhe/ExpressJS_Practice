// Error Middleware
const express = require('express');
const app = express();
app.get('/error', (req, res, next) => {
    next(new Error("Something went wrong"));
});
app.use((error, req, res, next) => {
    res.status(500).send("Something went wrong");
});
app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});