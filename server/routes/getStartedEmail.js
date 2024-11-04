const express = require("express");
const { sendGetStartedEmail } = require("../controller/emailController");
const router = express.Router();

router.post("/", async (req, res) => {
	const {
		firstName,
		lastName,
		email,
		phoneNumber,
		ext,
		title,
		companyName,
		address,
		city,
		province,
		postalCode,
		totalEmployees,
		solution,
		inquiry,
		interests,
	} = req.body;
	try {
		await sendGetStartedEmail(
			firstName,
			lastName,
			email,
			phoneNumber,
			ext,
			title,
			companyName,
			address,
			city,
			province,
			postalCode,
			totalEmployees,
			solution,
			inquiry,
			interests,
		);

		res.status(200).json({ message: "Email sent successfully" });
	} catch (error) {
		console.error("Error sending email:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

module.exports = router;
