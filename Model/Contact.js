const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: String,
    lastName: String,
    age: Number,
    phone: Number,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('ContactSchema', ContactSchema);