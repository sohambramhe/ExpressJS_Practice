// Create Modular User API with Dynamic ID Routes
// modular-user-api.js
const express = require('express');

const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
    res.send("User List");
});

userRoutes.get('/:id', (req, res) => {
    res.send(`User Details for ID: ${req.params.id}`);
});

userRoutes.post('/', (req, res) => {
    res.send("User Created");
});

userRoutes.put('/:id', (req, res) => {
    res.send(`User ${req.params.id} Updated`);
});

userRoutes.delete('/:id', (req, res) => {
    res.send(`User ${req.params.id} Deleted`);
});

module.exports = userRoutes;