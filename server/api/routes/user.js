const express = require('express');
const router = express.Router();

// test router logic
router.post('/user', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /user'
    });
});

module.exports = router;
