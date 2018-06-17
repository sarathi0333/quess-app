const express = require('express');
const router = express.Router();
const multer = require('multer');
var XLSX = require('xlsx');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        if(['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
            return callback(new Error('Wrong extension type'));
        }
        cb(null, true);
    }
  });

// accept user data excel file in this route
router.post('/user', upload.single('userData'), (req, res, next) => {
    console.log(req.file);
    var workbook = XLSX.readFile('./uploads/' + req.file.filename);
    var sheet_name_list = workbook.SheetNames;
    var data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    data = JSON.parse(data);
    res.status(200).json({
        message: 'File has been uploaded successfully'
    });
});

module.exports = router;
