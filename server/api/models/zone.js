const mongoose = require('mongoose');

const zoneDetailsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'UserDetails', required: true },
    zone_name: { type: String, required: true },
    site_id: String,
    site_name: String,
    created_Date: { type: Date, default: Date.now }

});

module.exports = mongoose.model('ZoneDetails', zoneDetailsSchema);
