// Mount User Router in Express Application
// mount-user-router.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
app.use(userRoutes);
app.listen(3000, () => {
    console.log("Server Running PORT 3000");
});