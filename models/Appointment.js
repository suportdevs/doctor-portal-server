const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        min: 11
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    wieght: {type: Number},
}, {timestamps: true});

const Appointment = mongoose.model('appointments', appointmentSchema);

module.exports = Appointment;