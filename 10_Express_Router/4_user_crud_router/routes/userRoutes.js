// Create User CRUD Router
// user-crud-router.js
const express = require('express');

const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
    res.send("User List");
});

userRoutes.post('/', (req, res) => {
    res.send("User Created");
});

userRoutes.put('/101', (req, res) => {
    res.send("User Updated");
});

userRoutes.delete('/101', (req, res) => {
    res.send("User Deleted");
});

module.exports = userRoutes;