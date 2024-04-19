const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const formsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    inputFields: {
        type: Schema.Types.Mixed,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    createdDate: {
        type: Number,
        required: true
    },
    formBgImg: {
        type: String,
        required: true
    },
    enabledDate: {
        type: String,
        required: true
    },
    enabledTime: {
        type: String,
        required: true
    },
    disabledDate: {
        type: String,
        required: true
    },
    disabledTime: {
        type: String,
        required: true
    },
})
const Forms = model('Forms', formsSchema);
module.exports = Forms;