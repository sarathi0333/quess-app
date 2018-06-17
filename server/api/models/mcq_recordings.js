const mongoose = require('mongoose');

const mcqRecordingsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    recording_id: { type: String, required: true,unique :true },
    Recorded_File: { type: String},
    language_id: { type: String }
    
});

module.exports = mongoose.model('McqRecordings', mcqRecordingsSchema);