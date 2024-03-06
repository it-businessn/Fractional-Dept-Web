const express = require("express");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const ResumeUpload = require("../models/ResumeUpload");
const router = express.Router();

const axios = require("axios");
const { sendEmail } = require("../controller/emailController");
const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, "uploads/");
	},
	filename(req, file, cb) {
		const uniqueFileName = file.originalname;

		cb(null, uniqueFileName);
	},
});

const upload = multer({ storage });

router.get("/", async (req, res) => {
	const { fileType } = req.params;
	try {
		const files = (await ResumeUpload.find({ fileType })).sort(
			(a, b) => b.uploadedOn - a.uploadedOn,
		);
		res.status(200).json(files);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
});

router.post("/upload", upload.single("resume"), async (req, res) => {
	const { name, email, phoneNumber } = req.body;
	const { originalname, path, mimetype } = req.file;

	try {
		const newResume = new ResumeUpload({
			name,
			phoneNumber,
			email,
			file: {
				data: fs.readFileSync(path),
				contentType: mimetype,
				path,
			},
			originalname,
			uploadedBy: email,
		});

		const resume = await newResume.save();
		const attachments = [
			{
				filename: resume.originalname,
				content: fs.createReadStream(resume.file.path),
			},
		];

		sendEmail(attachments, name, phoneNumber, email, resume.uploadedOn);
		res
			.status(201)
			.json({ resume, message: "Application submitted successfully!" });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
