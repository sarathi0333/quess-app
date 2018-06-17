const mongoose = require('mongoose');

const testResultReportSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    result_report_id : { type: String, required: true,unique :true },
    test_report_id: { type: String, required: true},
    user_id: { type: String, required: true },    
    response_id: { type: String, required: true },  
    test_date: { type: Date },
    test_start_time: { type: Date },
    test_end_time: { type: Date },
    Time_taken: { type: Number },
    construct_result_id: { type: String, required: true }, 
    cluster_result_id: { type: String, required: true },
    final_cluster_interpretation : { type: String }

});

module.exports = mongoose.model('TestResultReport', testResultReportSchema);