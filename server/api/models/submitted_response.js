const mongoose = require('mongoose');

const submittedResponseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    response_id : { type: String, required: true,unique :true },
    question_id : { type: String, required: true},
    recorded_answer : { type: String },
    weightage : { type: Number },
    time_taken: { type: Number},    
    construct_id : { type: String, required: true}
    });

module.exports = mongoose.model('SubmittedResponse', submittedResponseSchema);