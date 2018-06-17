const mongoose = require('mongoose');

const constructDetailsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    construct_id : { type: String, required: true,unique :true },
    Construct_name: { type: String}    
    });

module.exports = mongoose.model('constructDetails', constructDetailsSchema);