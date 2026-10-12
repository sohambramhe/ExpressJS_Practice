// Route Not Found Handler
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.status(200).send("Home Page");
});
app.use((req, res) => {
    res.status(404).send("Route Not Found");
});
app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});