const express = require('express');
const router = express.Router();

// test router logic
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /use'
    });
});

module.exports = router;
