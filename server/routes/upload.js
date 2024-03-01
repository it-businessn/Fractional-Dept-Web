const express = require("express");
const router = express.Router();
const ResumeUpload = require("../models/ResumeUpload");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const axios = require("axios");
const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, "uploads/");
	},
	filename(req, file, cb) {
		cb(
			null,
			`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`,
		);
	},
});
const upload = multer({ storage });
router.get("/", async (req, res) => {
	try {
		const response = await axios.get(
			`https://drive.google.com/uc?id=1mCwLSw5QEVrP4617U-ZNbv5yEAHufqoj`,
			{
				responseType: "arraybuffer",
			},
		);
		res.writeHead(200, { "Content-Type": "image/jpeg" });
		res.end(Buffer.from(response.data, "binary"));

		// const resumes = (await ResumeUpload.find()).sort((a, b) => b.date - a.date);
		// res.status(200).json(response);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
});

router.post("/", upload.single("resume"), async (req, res) => {
	const { name, email, phoneNumber, resume } = req.body;
	const { originalname, path } = req.file;

	const newResume = new ResumeUpload({
		name,
		email,
		phoneNumber,
		resumePath: path,
		date: Date.now(),
	});
	try {
		const resume = await newResume.save();
		res
			.status(201)
			.json({ resume, message: "Application submitted successfully!" });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});
module.exports = router;
