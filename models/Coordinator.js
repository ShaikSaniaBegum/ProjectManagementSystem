const mongoose = require('mongoose');

const coordinatorSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Stored as plain text (not recommended for production)
    branch: { type: String, required: true, unique: true } // Example: 'CSE', 'ECE', 'IT', etc.
});

module.exports = mongoose.model('coordinator', coordinatorSchema);
