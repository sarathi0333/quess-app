const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const upload = multer({
    storage: storage
  });

// accept user data excel file in this route
router.post('/user', upload.single('userData'), (req, res, next) => {
    console.log(req.file);
    res.status(200).json({
        message: 'File has been uploaded successfully'
    });
});

module.exports = router;
