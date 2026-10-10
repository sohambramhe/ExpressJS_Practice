// app.js 
const express = require('express');

const app = express();

const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);

app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});