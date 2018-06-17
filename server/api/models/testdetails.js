const mongoose = require('mongoose');

const testDetailsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    test_id: { type: String, required: true,unique :true },
    test_name: { type: String, required: true },
    max_users: { type: Number },
    test_duration: { type: Number },
    test_status: { type: String }
});

module.exports = mongoose.model('TestDetails', testDetailsSchema);