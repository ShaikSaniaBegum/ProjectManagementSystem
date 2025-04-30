const Faculty = require('../models/Faculty');
const Student = require('../models/Student');
const Coordinator = require('../models/Coordinator'); // Import the Coordinator model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { username, password } = req.body;



    // Check if Admin
    if (username === 'Admin' && password === 'admin@123') {
        const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token, role: 'admin' });
    }

    // Check if Faculty
    // const faculty = await Faculty.findOne({ username });
    // if (faculty && await bcrypt.compare(password, faculty.password)) {
    //     const token = jwt.sign({ role: 'faculty' }, process.env.JWT_SECRET, { expiresIn: '1h' });
    //     return res.json({ token, role: 'faculty' });
    // }
    const faculty = await Faculty.findOne({ username });
   if (faculty && faculty.password === password) {  // Direct password comparison
    const token = jwt.sign({ role: 'faculty' }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token, role: 'faculty' });} 
// } else {
//     return res.status(401).json({ message: 'Invalid username or password' });
// // }
const coordinator = await Coordinator.findOne({ username });

if (coordinator && coordinator.password === password) { // Direct password comparison
    const token = jwt.sign(
        { role: 'admin',username:coordinator.username, branch: coordinator.branch }, 
        process.env.JWT_SECRET, 
        { expiresIn: '1h' }
    );

    return res.json({ token, role: 'admin',username:coordinator.username, branch: coordinator.branch });
} 

  


    // Check if Student
    // const student = await Student.findOne({ username });
    // if (student && await bcrypt.compare(password, student.password)) {
    //     const token = jwt.sign({ role: 'student' }, process.env.JWT_SECRET, { expiresIn: '1h' });
    //     return res.json({ token, role: 'student' });
    // }
    

const student = await Student.findOne({ username });
    

// if (student && student.password === password) {  // Direct comparison
//     const token = jwt.sign({ role: 'student' }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     return res.json({ token, role: 'student' });
// } else {
//     return res.status(401).json({ message: 'Invalid username or password' });
// }

if (student) {
    console.log("Stored password:", student.password);
    console.log("Entered password:", password);

    if (student.password === password) {  // Direct comparison
        const token = jwt.sign({ role: 'student' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token, role: 'student' });
    } else {
        console.log("Password mismatch");
    }
} else {
    console.log("User not found");
}
return res.status(401).json({ message: 'Invalid username or password' });

    // Invalid credentials
}

module.exports = { login };









// const Faculty = require('../models/Faculty');
// const Student = require('../models/Student');
// const jwt = require('jsonwebtoken');

// const login = async (req, res) => {
//     const { username, password } = req.body;

//     // Check if Admin
//     if (username === 'Admin' && password === 'admin@123') {
//         const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
//         return res.json({ token, role: 'admin' });
//     }

//     // Check if Faculty
//     const faculty = await Faculty.findOne({ username });
//     if (faculty && faculty.password === password) {  // Direct password comparison
//         const token = jwt.sign({ role: 'faculty' }, process.env.JWT_SECRET, { expiresIn: '1h' });
//         return res.json({ token, role: 'faculty' });
//     }  

//     // Check if Student
//     const student = await Student.findOne({ username });
//     if (student && student.password === password) {  // Direct password comparison
//         const token = jwt.sign({ role: 'student' }, process.env.JWT_SECRET, { expiresIn: '1h' });
//         return res.json({ token, role: 'student' });
//     }  

//     // If no match, return invalid credentials
//     return res.status(401).json({ message: 'Invalid username or password' });
// };

// module.exports = { login };
