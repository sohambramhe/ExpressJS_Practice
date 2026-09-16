// Create a Basic Express Server
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Express Server Running");
});

app.listen(3000, () => {
    console.log("Server Running on PORT 3000");
});