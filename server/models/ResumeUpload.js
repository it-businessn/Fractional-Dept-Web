const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  resumePath: String,
  date: { type: Date, default: Date.now },
});

const ResumeUpload = mongoose.model("ResumeUpload", resumeSchema);

module.exports = ResumeUpload;
