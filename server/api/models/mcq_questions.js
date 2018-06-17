const mongoose = require('mongoose');

const mcqQuestionsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    question_id: { type: String, required: true,unique :true },
    question: { type: String, required: true },
    test_id: { type: String, required: true },
    recording_id: { type: String, required: true },
    answer_id: { type: String, required: true },
    construct_id: { type: String, required: true }    
});

module.exports = mongoose.model('McqQuestions', mcqQuestionsSchema);