const express = require('express');
const app = express ();
const router = express.Router();
const crypto = require('crypto');
var jwt = require('jsonwebtoken');
require('dotenv').config();

//dev
const username = "admin";
const password = "282d9dc36935434f021288dac34e6745"; //Asdfg!23

// test router logic
router.post('/admin', (req, res, next) => {
    var decipher = crypto.createDecipher('aes192', 'codepixer');
    var decryptedPassword = decipher.update(password, 'hex', 'utf8') + decipher.final('utf8');
    if(username == req.body.username && decryptedPassword == req.body.password) {
        const token = jwt.sign({
            username: req.body.username,
        }, process.env.JWT_KEY, {
            expiresIn: "1h"
        })
        res.status(200).json({
            status: "success", 
            data: {
                user: username,
                token: token
            }})
    } else {
        res.status(200).json({status: "failure", data: {message: "invalid user"}});
    }
});

module.exports = router;