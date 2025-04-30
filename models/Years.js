const mongoose = require("mongoose");

const yearsSchema = new mongoose.Schema({
  branch: { type: String, required: true }, // e.g., "CSE", "IT", etc.
  sections: [
    {
      year: { type: String, required: true }, // "I Year", "II Year", etc.
      semester: { type: String, required: true }, // "1st Semester", "2nd Semester", etc.
      departments: [
        {
          department: { 
            type: String,
            enum: ["CSE", "AIML", "AIDS", "IT", "ME", "CIVIL", "ECE", "EEE"], // predefined list of departments
            required: true
          },
          sections: [
            {
              section: { type: String, required: true }, // "CSE A", "CSE B", etc.
            }
          ],
        },
      ],
    },
  ],
});

const Years = mongoose.model("Years", yearsSchema); // The model name is 'Years'

module.exports = Years;
