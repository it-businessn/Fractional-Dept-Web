const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: process.env.NODEMAILER_ZOHO_SMTP,
	port: process.env.NODEMAILER_ZOHO_SMTP_PORT,
	secure: true,
	auth: {
		user: process.env.NODEMAILER_ZOHO_SMTP_USER_EMAIL,
		pass: process.env.NODEMAILER_ZOHO_SMTP_PASSWORD,
	},
});

exports.sendEmail = async (
	attachments,
	name,
	phoneNumber,
	email,
	uploadedOn,
) => {
	const mailOptions = {
		from: "julik@businessn.com",
		to: "julik@businessn.com",
		cc: [
			"davidd@businessn.com",
			// "andrew.dehkurdi@fractionaldepartments.com",
			// "erwan@fractionaldepartments.com",
		],
		subject:
			"New File Upload Notification from https://fractionaldepartments.com/",
		text: "A file has been uploaded. Check the attachment.",
		attachments,
		html: ` 
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #ccc; border-radius: 5px;">
            <div style="background-color: #f0f0f0; padding: 10px; text-align: center;">
                <h2 style="margin: 0;">New File Attachment</h2>
            </div>
            <div style="padding: 20px;">
                <p>Hello Agent,</p>
    
                <p>We wanted to inform you that a new resume has been uploaded to the system. Here are the details:</p>

                <ul style="list-style-type: none; padding: 0;">
                <li style="margin-bottom: 10px;"><strong>Candidate Name: ${name}</strong> </li>
                <li style="margin-bottom: 10px;"><strong>Candidate's Email: ${email}</strong> </li>
                <li style="margin-bottom: 10px;"><strong>Phone Number: ${phoneNumber}</strong> </li>
                <li style="margin-bottom: 10px;"><strong>File Uploaded On: ${new Date(
									uploadedOn,
								)}</strong> </li>
                </ul>
            

                <p style="margin-top: 20px;">Thank you for your attention.</p>
              
                <p style="margin-top: 10px;">Best regards,</p>
                <p style="margin-top: 10px;">Fractional Departments</p>
              
                <p style="margin-top: 10px;">Thank you!</p>
            </div>
      </div>
    `,
	};
	try {
		await transporter.sendMail(mailOptions);
	} catch (error) {
		console.error("Error sending email:", error);
	}
};
