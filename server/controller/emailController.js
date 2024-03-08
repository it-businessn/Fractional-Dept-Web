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

exports.sendGetStartedEmail = async (
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
) => {
	const mailOptions = {
		from: "julik@businessn.com",
		to: "julik@businessn.com",
		cc: [
			"davidd@businessn.com",
			// "andrew.dehkurdi@fractionaldepartments.com",
			// "erwan@fractionaldepartments.com",
		],
		subject: "New Form Submission from https://fractionaldepartments.com/",
		text: "We have received a new inquiry from a potential customer. Here are the details",
		html: ` 
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #ccc; border-radius: 5px;">
            <div style="background-color: #f0f0f0; padding: 10px; text-align: center;">
                <h2 style="margin: 0;">New Customer Inquiry</h2>
            </div>
            <div style="padding: 20px;">
                <p>Hello Agent,</p>
    
                <p>We have received a new inquiry from a potential customer. Here are the details:</p>

				<p style="margin-bottom: 10px;"><strong>Customer Information:</strong></p>
                <ul style="list-style-type: none; padding: 0;">
			
                <li style="margin-bottom: 10px;"><strong>First Name: ${firstName}</strong> </li>
                <li style="margin-bottom: 10px;"><strong>Last Name: ${lastName}</strong> </li>
                <li style="margin-bottom: 10px;"><strong>Email: ${email}</strong> </li>
				
                <li style="margin-bottom: 10px;"><strong>Phone Number: ${phoneNumber}</strong> </li>
                <li style="margin-bottom: 10px;"><strong>Extension: ${ext}</strong> </li>
                <li style="margin-bottom: 10px;"><strong>Title: ${title}</strong> </li>
				
                <li style="margin-bottom: 10px;"><strong>Company Name: ${companyName}</strong> </li>
                <li style="margin-bottom: 10px;"><strong>Address: ${address} ${city}, ${province}, ${postalCode} </strong> </li>
                <li style="margin-bottom: 10px;"><strong>Total Employees: ${totalEmployees}</strong> </li>
				
  				<p style="margin-bottom: 10px;"><strong>Customer's Inquiry and Interests:</strong></p>
                <li style="margin-bottom: 10px;"><strong>Solution: ${solution}</strong> </li>
                <li style="margin-bottom: 10px;"><strong>Inquiry: ${inquiry}</strong> </li>
                <li style="margin-bottom: 10px;"><strong>Interests: ${JSON.stringify(
									interests,
								)}</strong> </li>
                
                </ul>
            
				<p style="margin-top: 20px;">Please reach out to the customer at your earliest convenience to discuss their needs and provide further information.</p>

                <p style="margin-top: 20px;">Thank you for your attention.</p>
              
                <p style="margin-top: 10px;">Best regards,</p>
                <p style="margin-top: 10px;">Fractional Departments</p>
              
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
