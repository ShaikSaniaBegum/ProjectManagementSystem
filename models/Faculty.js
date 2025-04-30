// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const facultySchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// });

// // Hash password before saving
// facultySchema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 10);
//     }
//     next();
// });

// module.exports = mongoose.model('Faculty', facultySchema);

const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Stored as plain text (not recommended for production)
});

module.exports = mongoose.model('faculty', facultySchema);
