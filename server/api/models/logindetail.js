const mongoose = require('mongoose');

const loginDetailsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_id: { type: String, ref: 'UserDetails', required: true },
    password: { type: String, required: true },
    last_login: { type: Date },
    user_role: { type: String, required: true },
    user_status: { type: String },
    valid_till: { type: String, required: true, default: 2 },
    created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LoginDetails', loginDetailsSchema);