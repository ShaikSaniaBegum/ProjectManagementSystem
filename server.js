// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');
// require('dotenv').config();
// const coordinatorRoutes = require("./routes/coordinatorRoutes");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// //Connect to MongoDB Atlas
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

//     .then(() => console.log('Connected to MongoDB Atlas'))
//     .catch(err => console.error('Error connecting to MongoDB Atlas:', err));
//  // If you're using environment variables


// // Routes
// app.use('/api/auth', authRoutes);
// app.use("/api/coordinators", coordinatorRoutes);

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();
const coordinatorRoutes = require("./routes/coordinatorRoutes");
const yearsRoutes = require("./routes/years"); // Import the new years routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use("/api/coordinators", coordinatorRoutes);
app.use("/api/years", yearsRoutes);  // Add the new route for years

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
