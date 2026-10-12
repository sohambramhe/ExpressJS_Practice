// Centralized Error Handler
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Home Page");
});
app.get('/error', (req, res, next) => {
    next(new Error("Database Error"));
});
app.use((req, res, next) => {
    res.status(404).send("Route Not Found");
});
app.use((error, req, res, next) => {
    res.status(500).send(error.message);
});
app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});
