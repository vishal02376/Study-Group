const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
});

// Create User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
