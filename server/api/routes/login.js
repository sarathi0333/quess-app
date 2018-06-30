const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');
require('dotenv').config();

var LoginDetails = require('../models/logindetail');
var UserDetails = require('./../models/user');
var checkAuth = require('./../middleware/check-auth-user');

router.post('/login', (req, res) => {
    LoginDetails.find({ user_id: req.body.phoneNumber }, (err, doc) => {
        if (err) {
            console.log(err);
            res.status(200).json({
                status: "failure",
                data: {
                    message: err.message
                }
            })
        } else if (doc.length > 0) {
            const token = jwt.sign({
                user_id: req.body.phoneNumber
            }, process.env.USER_JWT_KEY, {
                    expiresIn: '1h'
                })
            res.status(200).json({
                status: "success",
                data: {
                    message: "user authenticated",
                    details: {
                        user_id: doc[0].user_id,
                        user_role: doc[0].user_role,
                        user_status: doc[0].user_status,
                        token: token
                    }
                }
            })
        } else if (doc.length === 0) {
            res.status(200).json({
                status: "failure",
                data: {
                    message: "you are unautorized to take test"
                }
            })
        }
    })
})
router.get('/login', checkAuth, (req, res) => {
    console.log(req.query);
    UserDetails.find({ _id: req.query.user })
        .select('first_name middle_name last_name age gender work_exp marital_status no_of_children native_place reason_for_leaving_job past_Police_Record police_record_description')
        .exec((err, doc) => {
            if (err) {
                res.status(401).json({
                    status: "failure",
                    data: {
                        message: err.message
                    }
                })
            } else if (doc.length > 0) {
                res.status(200).json({
                    status: "success",
                    data: {
                        message: "user authenticated",
                        details: doc[0]
                    }
                })
            } else {
                res.status(401).json({
                    status: "failure",
                    data: {
                        message: "Invalid user"
                    }
                })
            }
        });
});

router.put('/login', checkAuth, (req, res) => {
    // let query = { _id: req.body._id };
    UserDetails.findByIdAndUpdate(req.body._id, {
        $set: {
            first_name: req.body.first_name,
            middle_name: req.body.middle_name,
            last_name: req.body.last_name,
            age: req.body.age,
            gender: req.body.gender,
            work_exp: req.body.work_exp,
            marital_status: req.body.marital_status,
            no_of_children: req.body.no_of_children,
            native_place: req.body.native_place,
            reason_for_leaving_job: req.body.reason_for_leaving_job,
            past_Police_Record: req.body.past_Police_Record,
            police_record_description: req.body.police_record_description
        }
    }, {new: true})
    .select('first_name middle_name last_name age gender work_exp marital_status no_of_children native_place reason_for_leaving_job past_Police_Record police_record_description')
    .exec(((err, doc) => {
        if(err) {
            res.json({
                status: "failure",
                data: {
                    message: "unable to save the changes"
                }
            })
        } else {
            res.json({
                status: "success",
                data: doc
            });
        }
    }))
})

module.exports = router;