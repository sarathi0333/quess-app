const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');
require('dotenv').config();

var LoginDetails = require('../models/logindetail');
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
        } else if(doc.length === 0) {
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
});

module.exports = router;