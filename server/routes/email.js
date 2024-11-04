const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

const agentNotificationTemplate = (
	name,
	email,
	phone,
	province,
	inquiryType,
	message,
	agreeToReceiveInfo,
) => {
	return ` 
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #ccc; border-radius: 5px;">
        <div style="background-color: #f0f0f0; padding: 10px; text-align: center;">
            <h2 style="margin: 0;">New User Inquiry</h2>
        </div>
        <div style="padding: 20px;">
            <p>Hello Agent,</p>

            <p>A new user has accessed your contact form with the following details:</p>

            <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</li>
            <li style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</li>
            <li style="margin-bottom: 10px;"><strong>Phone:</strong> ${phone}</li>
            <li style="margin-bottom: 10px;"><strong>Province:</strong> ${province}</li>
            <li style="margin-bottom: 10px;"><strong>Inquiry Type:</strong> ${inquiryType}</li>
            <li style="margin-bottom: 10px;"><strong>Message:</strong> ${message}</li>
            <li style="margin-bottom: 10px;"><strong>Agree to Receive Info:</strong> ${
							agreeToReceiveInfo === "2" ? "Yes" : "No"
						}
                    </li>
            </ul>

            <p style="margin-top: 20px;">Thank you!</p>
        </div>
  </div>
`;
};

router.post("/", async (req, res) => {
	const {
		name,
		email,
		phone,
		province,
		inquiryType,
		message,
		agreeToReceiveInfo,
	} = req.body;

	const transporter = nodemailer.createTransport({
		host: process.env.NODEMAILER_ZOHO_SMTP,
		port: process.env.NODEMAILER_ZOHO_SMTP_PORT,
		secure: true,
		auth: {
			user: process.env.NODEMAILER_ZOHO_SMTP_USER_EMAIL,
			pass: process.env.NODEMAILER_ZOHO_SMTP_PASSWORD,
		},
	});
	const mailOptions = {
		from: process.env.NODEMAILER_ZOHO_SMTP_USER_EMAIL,
		to: process.env.NODEMAILER_EMAIL_TO,
		cc: [
			process.env.NODEMAILER_EMAIL_CC_1,
			process.env.NODEMAILER_EMAIL_CC_2,
			process.env.NODEMAILER_EMAIL_CC_3,
		],
		subject:
			"New Contact Form Submission from https://fractionaldepartments.com/",
		html: agentNotificationTemplate(
			name,
			email,
			phone,
			province,
			inquiryType,
			message,
			agreeToReceiveInfo,
		),
	};
	try {
		await transporter.sendMail(mailOptions);
		res.status(200).json({ message: "Email sent successfully" });
	} catch (error) {
		console.error("Error sending email:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

module.exports = router;

// To add more details- for future ref
// https://mailadmin.zoho.com/cpanel/home.do#users/843793126/personalInfo
// https://mailadmin.zoho.com/cpanel/home.do#mailSettings/toolsAndConfiguration/configurations
// text: `This is to notify you that a new user has logged into your website using your account.

// Login Details:
// - Username: ${username}
// - Login Time: ${loginTime}
// - IP Address: ${ipAddress}

// If you did not initiate this login or suspect any unauthorized access, please contact our support immediately.

// Sincerely,
// Your Website Team`,
