const express = require('express');
const router = express.Router();
const multer = require('multer');
var XLSX = require('xlsx');
var mongoose = require('mongoose');
const checkAuth = require('./../middleware/check-auth');
var array = require('lodash/array');

//Model
var ZoneDetails = require('./../models/zone');
var UserDetails = require('./../models/user');
var LoginDetails = require('../models/logindetail');

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
router.post('/user', checkAuth, upload.single('userData'), (req, res, next) => {
    var workbook = XLSX.readFile('./uploads/' + req.file.filename);
    var sheet_name_list = workbook.SheetNames;
    var data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    var keys = Object.keys(data[0]);
    orginalKey = ["sl_no", "first_name", "middle_name", "last_name", "mobile", "zone_id", "site_id", "site_name", "age", "gender", "work_exp", "marital_status", "no_of_children", "native_place", "reason_for_leaving_job", "past_police_record", "police_record_description"];
    if (array.difference(orginalKey, keys).length > 0) {
        res.locals.templateerr = {
            status: "failure",
            data: {
                message: "wrong template. kindly check the template"
            }
        }
        next();
    }
    var zoneData = [{
        Zone01: "Chennai",
        Site01: "Adyar"
    }, {
        Zone02: "Coimbatore",
        Site02: "Saravanampatti"
    }]
    var zoneDetails = [];
    data.forEach((elem) => {
        zoneData.forEach(item => {
            if (Object.keys(item)[0] == elem.zone_id) {
                let zoneDoc = {
                    _id: elem.zone_id,
                    zone_name: item[elem.zone_id],
                    site_id: elem.site_id,
                    site_name: item[elem.site_id]
                }
                zoneDetails.push(zoneDoc);
            }
        })
    });
    ZoneDetails.insertMany(zoneDetails, { ordered: false }, (err, response) => {
        //Handle the call back if need !
        var dataLength = data.length;
        var count = 0;
        for (let elem of data) {
            let userDoc = {
                _id: elem.mobile,
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
                zone_id: ""
            };
            ZoneDetails.find({ _id: elem.zone_id }, (err, response) => {
                if (err) {
                    //handle error
                } else if (response.length > 0) {
                    userDoc.zone_id = response[0]._id;
                    UserDetails.create(userDoc, (err, doc) => {
                        if (err) {
                            //handle error
                            res.locals.err = err;
                            next();
                        } else if (doc) {
                            let logindetail = {
                                _id: new mongoose.Types.ObjectId(),
                                user_id: doc._id,
                                password: "abcd",
                                last_login: new Date(),
                                user_role: "user",
                                user_status: "active",
                            }
                            LoginDetails.create(logindetail, (err, document) => {
                                if (err) {
                                    //handle error;
                                    res.locals.err = err;
                                    next();
                                } else {
                                    count++;
                                    if (count === dataLength) {
                                        res.locals.finalResponase = {
                                            status: "success",
                                            data: {
                                                message: `Excel sheet has been uploaded successfully with ${count} users.`
                                            }
                                        }
                                        next();
                                    }
                                }
                            })
                        }
                    });
                }
            })
        };
    })
}, (req, res, next) => {
    if (res.locals.finalResponase) {
        res.status(200).json(res.locals.finalResponase);
    } else if (res.locals.templateerr) {
        res.status(200).json(res.locals.templateerr);
    } else {
        res.status(200).json({
            status: "failure",
            data: {
                message: res.locals.err.message
            }
        })
    }
});

//router test user data
// router.get('/userdetails', (req, res, next) => {
//     LoginDetails.find()
//         .populate('user_id')
//         .exec()
//         .then(doc => {
//             res.status(200).json(doc);
//         })
//         .catch(err => {
//             res.status(200).json(err);
//         })
// })

module.exports = router;
