const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

const userRoutes = require('./api/routes/user');
const adminRoutes = require('./api/routes/admin');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());


//API
app.use('/api', userRoutes);
app.use('/api', adminRoutes);

// Middleware serves the static angular files.
app.use('/', express.static(path.join(__dirname, '../frontend/dist')))

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

module.exports = app;
