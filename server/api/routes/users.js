const express = require('express');
const router = express.Router();
const multer = require('multer');
var XLSX = require('xlsx');
const mongoose = require('mongoose');

//Model
var ZoneDetails = require('./../models/zone');
var UserDetails = require('./../models/user');

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
    fileFilter: function (req, file, cb) {
        if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length - 1]) === -1) {
            return callback(new Error('Wrong extension type'));
        }
        cb(null, true);
    }
});

// accept user data excel file in this route
router.post('/user', upload.single('userData'), (req, res, next) => {
    var workbook = XLSX.readFile('./uploads/' + req.file.filename);
    var sheet_name_list = workbook.SheetNames;
    var data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    var zoneArray = [];
    var userArray = [];
    data.forEach((elem) => {
        delete elem.sl_no;
        zoneArray.push({
            _id: new mongoose.Types.ObjectId(),
            zone_name: elem.zone_name,
            site_id: "SITE001",
            site_name: elem.site_name
        })
        userArray.push({
            _id: new mongoose.Types.ObjectId(),
            first_name: elem.first_name,
            middle_name: elem.middle_name,
            last_name: elem.last_name,
            mobile: elem.mobile,
            age: elem.age,
            gender: elem.gender,
            work_exp: elem.work_exp,
            marital_status: elem.marital_status,
            no_of_children: elem.no_of_children,
            native_place: elem.native_place,
            reason_for_leaving_job: elem.reason_for_leaving_job,
            past_Police_Record: elem.past_Police_Record,
            police_record_description: elem.police_record_description,
        });
    })
    ZoneDetails.create(zoneArray, (err, zoneresponse) => {
        if (err) {
            console.log(err, "unable to insert into Zone DB");
        } else {
            zoneresponse.forEach((elem, index) => {
                userArray[index].zone_id = elem._id;
            });
            console.log(userArray);
            UserDetails.create(userArray, (err, userresponse) => {
                if(err) {
                    console.log(err, "unable to insert into User DB");
                } else {
                    res.status(200).json({
                        message: 'File has been uploaded successfully',
                        userresponse
                    });
                }
            });
        }
    });
});

//router test user data
router.get('/userdetails', (req, res, next) => {
    UserDetails.find()
    .populate('zone_id')
    .exec()
    .then(doc => {
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(200).json(err);
    })
})

module.exports = router;
