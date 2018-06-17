const mongoose = require('mongoose');

const SupportedLanguagesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    language_id : { type: String, required: true,unique :true },
    language : { type: String}
    });

module.exports = mongoose.model('supportedLanguages', SupportedLanguagesSchema);