const mongoose = require('mongoose');

const zoneDetailsSchema = mongoose.Schema({
    _id: { type: String, required: true },
    zone_name: String,
    site_id: { type: String, required: true},
    site_name: String,
    created_Date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ZoneDetails', zoneDetailsSchema);
