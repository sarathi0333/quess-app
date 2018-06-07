const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRoutes = require('./api/routes/user');

app.use('/user', userRoutes);

// Middleware the serve the static angular files.

//

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;
