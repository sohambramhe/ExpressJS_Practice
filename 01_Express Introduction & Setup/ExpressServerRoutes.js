// Create an Express Server with Home and About Routes
const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Home Page")
});

app.get("/about", (req, res) => {
    res.send("About Page")
});

app.listen(3000, () => {
    console.log("Server Running PORT 3000")
});