const express = require('express');
const app = express();
const path = require('path');
// const mongoose = require('mongoose');

const userRoutes = require('./api/routes/user');

// Middleware serves the static angular files.
app.use('/', express.static(path.join(__dirname, '../dist')))

//API
app.use('/user', userRoutes);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

module.exports = app;
