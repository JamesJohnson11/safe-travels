const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
    }
});

module.exports = mongoose.model('User', userSchema);