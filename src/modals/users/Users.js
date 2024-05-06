const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const UsersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    country: {
        type: String
    },
    contactNumber: {
        type: String
    },
    fillingUpForm : {
        type: Array
    }
})

const Users = model('Users', UsersSchema)
module.exports = Users;