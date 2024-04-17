const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const storedDataSchema = new Schema({
    ownerEmail: {
        type: String,
        required: true
    }, 
    formId: {
        type: String,
        required: true
    },
    storedTime: {
        type: Number,
        required: true
    },
    allData: {
        type: Array,
        required: true
    },
    filledUpUserEmail: {
        type: String,
        required: true
    },
    
})

const StoredData = model('storedData', storedDataSchema);
module.exports = StoredData;