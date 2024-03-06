const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
	name: String,
	phoneNumber: String,
	email: String,
	file: {
		data: Buffer,
		contentType: String,
		path: String,
	},
	originalname: String,
	uploadedBy: String,
	uploadedOn: { type: Date, default: Date.now },
});
const ResumeUpload = mongoose.model("ResumeUpload", resumeSchema);

module.exports = ResumeUpload;
