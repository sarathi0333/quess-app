const mongoose = require('mongoose');

const mcqAnswersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    answer_id: { type: String, required: true,unique :true },
    option_id: { type: String, required: true },
    test_id: { type: String, required: true },
    options: { type: String, required: true },
    weighatge: { type: String, required: true }
});

module.exports = mongoose.model('McqAnswers', mcqAnswersSchema);