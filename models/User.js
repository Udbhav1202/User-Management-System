const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true,'Email is required'],
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Email is invalid'],
    },
    age: {
        type: Number,
        min: [0,'Age must be a positive number'],
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;