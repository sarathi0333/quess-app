const mongoose = require('mongoose');

const userDetailsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    zone_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ZoneDetails', required: true },
    first_name: { type: String, required: true },
    middle_name: String,
    last_name: String,
    mobile: { type: Number, required: true, unique: true },
    age : Number,
    gender: String,
    work_exp: Number,
    marital_status: String,
    no_of_children: Number,
    native_place: String,
    reason_for_leaving_job: String,
    past_Police_Record: String,
    police_record_description: String,
    created_Date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserDetails', userDetailsSchema);