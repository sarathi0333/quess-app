const mongoose = require('mongoose');

const constructwiseResultSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    construct_result_id : { type: String, required: true,unique :true },
    result_report_id: { type: String, required: true},
    construct_id: { type: String, required: true },    
    Contuct_name: { type: String },  
    Construct_total_score: { type: Date },
    construct_total_que: { type: Date },
    test_construct_avg_score: { type: Date },
    construct_flag: { type: Number }
    });

module.exports = mongoose.model('ConstructwiseResult', constructwiseResultSchema);