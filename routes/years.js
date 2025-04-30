const express = require("express");
const router = express.Router();
const Years = require("../models/Years"); // Import the Years model

// POST route to create a new year entry
router.post("/years", async (req, res) => {
  try {
    // Create a new entry using the data from the request body
    const newYear = new Years(req.body);
    // Save the entry to the database
    const savedYear = await newYear.save();
    res.status(201).json(savedYear);  // Return the saved data
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET route to fetch all year entries
router.get("/years", async (req, res) => {
  try {
    const years = await Years.find();  // Get all the data from the Years collection
    res.status(200).json(years);  // Send the data back to the client
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;  // Export the routes so they can be used in server.js
