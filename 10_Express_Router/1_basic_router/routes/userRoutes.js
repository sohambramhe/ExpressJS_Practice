// Create a Basic User Router
const express = require('express');
const userRouter = express.Router();
userRouter.get('/users', (req, res) => {
    res.send("User List");
});
module.exports = userRouter;