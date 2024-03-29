const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const formsSchema = ({
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
    }
})

const Forms = model('Forms', formsSchema);
module.exports = Forms;