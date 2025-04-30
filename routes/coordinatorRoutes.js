
// const express = require("express");
// const Coordinator = require("../models/Coordinator"); // Adjust path if needed

// const router = express.Router();

// // Route to fetch coordinator details by username using GET and query parameter
// router.get("/getCoordinator", async (req, res) => {
//   const { username } = req.query; // Get username from query parameters
//   console.log("Received username:", username);
//   try {
//     if (!username) {

//       return res.status(400).json({ message: "Username is required" });

//     }

//     const coordinator = await Coordinator.findOne({ username });

//     if (!coordinator) {
//       return res.status(404).json({ message: "Coordinator not found" });
//     }

//     // Assuming your coordinator model includes `username`, `branch`, and `yearsData`
//     res.status(200).json({
//       username: coordinator.username,
//       branch: coordinator.branch,
//       // yearsData: coordinator.yearsData, // Adjust if needed
//     });
//   } catch (error) {
//     console.error("Error fetching coordinator:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;

const express = require("express");
const Coordinator = require("../models/Coordinator"); // Adjust path if needed

const router = express.Router();

// Route to fetch coordinator details by username using GET and path parameter
router.get("/getCoordinator/:username", async (req, res) => {
  

  try {
    console.log("Requested name:", req.params);
      const { username } = req.params;
      console.log("Received request for username:", username);

      const coordinator = await Coordinator.findOne({ username });

      if (!coordinator) {
          return res.status(404).json({ error: "Coordinator not found" });
      }

      res.json({
          username: coordinator.username,
          branch: coordinator.branch,
      });
  } catch (error) {
      console.error("Error fetching coordinator:", error);
      res.status(500).json({ error: "Server error" });
  }
});


module.exports = router;
