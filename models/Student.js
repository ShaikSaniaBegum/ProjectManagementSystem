// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const studentSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// });

// // Hash password before saving
// studentSchema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 10);
//     }
//     next();
// });

// module.exports = mongoose.model('Student', studentSchema);
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Stored as plain text (not recommended for production)
});

module.exports = mongoose.model('student', studentSchema);
