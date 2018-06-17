const mongoose = require('mongoose');

const testStatisticsDetailsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    test_report_id: { type: String, required: true,unique :true },
    test_id: { type: String, required: true },    
    test_date: { type: Date },
    test_start_time: { type: Date },
    test_test_end_time: { type: Date },
    test_duration: { type: Number },
    test_status: { type: String },
    total_users_participated: { type: Number },
});

module.exports = mongoose.model('TestStatisticsDetails', testStatisticsDetailsSchema);