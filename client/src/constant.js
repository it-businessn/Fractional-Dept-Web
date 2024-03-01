import accounting from "./assets/images/services/accounting.jpg";
import ai from "./assets/images/services/ai.jpg";
import aiData from "./assets/images/services/aiData.jpg";
import bookkeeper from "./assets/images/services/bookkeeper.jpg";
import cfo from "./assets/images/services/cfo.png";
import controller from "./assets/images/services/controller.png";
import hr from "./assets/images/services/hr.png";
import {
	default as aiExpert,
	default as infoTech,
} from "./assets/images/services/infoTech.png";
import infoTechAutomate from "./assets/images/services/infoTechAutomate.png";
import infoTechIT from "./assets/images/services/infoTechIT.png";
import {
	default as infoTechWeb,
	default as marketing,
} from "./assets/images/services/marketing.png";
import marketingManager from "./assets/images/services/marketingManager.png";
import marketingMedia from "./assets/images/services/marketingMedia.png";
import {
	default as infoTechIntegrate,
	default as marketingStrategist,
} from "./assets/images/services/marketingStrategist.png";
import payroll from "./assets/images/services/payroll.png";
import payrollAdmin from "./assets/images/services/payrollAdmin.png";
import payrollHR from "./assets/images/services/payrollHR.jpg";

export const NAV_ITEMS = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "About",
		href: "/about",
	},
	{
		label: "Services",
		href: "/services/Accounting",
	},
	{
		label: "Careers",
		href: "/careers",
	},
	{
		label: "Contact",
		href: "/contact",
	},
];

export const TABS = [
	{
		id: "Accounting",
		heading: "Accounting",
		imgSrc: accounting,
		subheading:
			"Dial in your operations by having your departments anchored by strong team players.",
		jobTitle: ["CFO", "Controller", "Bookkeeper"],
		buttonText: "Learn more about our Accounting solutions",
	},
	{
		id: "Information Technology",
		heading: "Information Technology",
		imgSrc: infoTech,
		subheading:
			"Dial in your operations by having your departments anchored by strong team players.",
		jobTitle: [
			"Automations Specialist",
			"Web Developer",
			"Integrations Specialist",
			"App Developer",
		],
		buttonText: "Learn more about our IT solutions",
	},
	{
		id: "Marketing",
		heading: "Marketing",
		imgSrc: marketing,
		subheading:
			"Dial in your operations by having your departments anchored by strong team players.",
		jobTitle: ["Marketing Manager", "Social Media Manager"],
		buttonText: "Learn more about our Marketing solutions",
	},
	{
		id: "AI",
		heading: "AI",
		imgSrc: ai,
		subheading:
			"Dial in your operations by having your departments anchored by strong team players.",
		jobTitle: ["Marketing Manager", "Social Media Manager"],
		buttonText: "Learn more about our Marketing solutions",
	},
	{
		id: "Payroll",
		heading: "HR",
		imgSrc: hr,
		subheading:
			"Dial in your operations by having your departments anchored by strong team players.",
		jobTitle: ["Marketing Manager", "Social Media Manager"],
		buttonText: "Learn more about our Marketing solutions",
	},
	{
		id: "Payroll",
		heading: "Payroll",
		imgSrc: payroll,
		subheading:
			"Dial in your operations by having your departments anchored by strong team players.",
		jobTitle: ["Payroll Administrator", "HR Manager"],
		buttonText: "Learn more about our Payroll & HR solutions",
	},
];

export const SERVICE_IT = {
	IT_FULL: "Information Technology",
	IT: "IT",
};

export const SERVICE_TABS = [
	{
		id: "Accounting",
		heading: "Confident reporting and financial clarity",
		subheading:
			"Explore the path to fiscal excellence tailored to meet our business requirements.",
		imgSrc: accounting,
		content: [
			{
				detail_id: "Accounting",
				id: "CFO",
				heading: "Chief Financial Officer",
				imgSrc: cfo,
				price: 3400,
				features: [
					{
						feature: "Oversee financial planning, budgeting, and forecasting.",
					},
					{
						feature: "Manage cash flow and investment strategies.",
					},
					{
						feature: "Assess and mitigate financial risks.",
					},
					{
						feature:
							"Provide financial insights to support strategic decision-making.",
					},
					{
						feature:
							"Communicate financial performance to stakeholders and investors.",
					},
				],
				details:
					"The Chief Financial Officer (CFO) is a senior executive responsible for managing the financial actions of a company.",
				subheading:
					"Optimize fiscal performance through strategic financial guidance, growth opportunity identification, risk management, insightful reporting, and sustainable growth expertise.",
			},
			{
				detail_id: "Accounting",
				id: "Controller",
				heading: "Controller",
				imgSrc: controller,
				price: 1200,
				features: [
					{
						feature:
							"Manage the preparation of financial statements and reports.",
					},
					{
						feature:
							"Develop and implement accounting policies and procedures.",
					},
					{
						feature:
							"Monitor internal controls to ensure compliance with regulations and safeguard assets.",
					},
					{
						feature:
							"Analyze financial data to provide insights and recommendations to management.",
					},
					{
						feature:
							"Collaborate with other departments to support business objectives.",
					},
				],
				details:
					"Controllers are responsible for overseeing the accounting operations of a business, including financial reporting, budgeting, and internal controls.",
				subheading:
					"Streamline financial operations with our Controller service: efficient financial management, accurate reporting, internal controls, and compliance expertise.",
			},
			{
				detail_id: "Accounting",
				id: "Bookkeeper",
				heading: "Bookkeeper",
				imgSrc: bookkeeper,
				price: 225,
				features: [
					{
						feature:
							"Record financial transactions accurately and efficiently.",
					},
					{
						feature: "Maintain ledgers and financial records.",
					},
					{
						feature:
							"Prepare financial statements, such as balance sheets and income statements.",
					},
					{
						feature: "Reconcile accounts and ensure accuracy.",
					},
					{
						feature: "Assist with audits and financial reporting requirements.",
					},
				],
				details:
					"A Bookkeeper plays a vital role in maintaining accurate financial records for a business. They are responsible for recording financial transactions, balancing accounts, and ensuring compliance with accounting principles and regulations.",
				subheading:
					"Simplify bookkeeping tasks with our Bookkeeper service: organized financial records, transaction tracking, reconciliations, and timely financial reports.",
			},
		],
	},
	{
		id: "Marketing",
		heading: "Empower your brand with effective strategies and market insights",
		subheading:
			"Explore the path to marketing excellence customized to elevate your business. Gain confidence in reporting and clarity in your market endeavors",
		imgSrc: marketing,
		content: [
			{
				detail_id: "Marketing",
				id: "Marketing Manager",
				heading: "Marketing Manager",
				imgSrc: marketingManager,
				price: 425,
				features: [
					{
						feature:
							"Develop marketing plans and campaigns to reach target audiences.",
					},
					{
						feature:
							"Oversee advertising, promotions, and digital marketing efforts.",
					},
					{
						feature:
							"Conduct market research to understand customer needs and preferences.",
					},
					{
						feature:
							"Analyze marketing metrics to evaluate campaign effectiveness.",
					},
					{
						feature:
							"Collaborate with cross-functional teams to align marketing efforts with business goals.",
					},
				],
				details:
					"Marketing Managers are responsible for developing and executing marketing strategies to promote products or services and drive revenue growth.",
				subheading:
					"Amplify your brand's impact with our Marketing Manager service: strategic campaigns, market insights, and effective brand positioning. Elevate your marketing approach",
			},
			{
				detail_id: "Marketing",
				id: "Content strategist",
				heading: "Content strategist",
				imgSrc: marketingStrategist,
				price: 190,
				features: [
					{
						feature:
							"Develop content strategies aligned with brand identity and target audience preferences.",
					},
					{
						feature:
							"Create and publish content across various channels, such as websites, blogs, and social media.",
					},
					{
						feature:
							"Monitor content performance and make adjustments based on analytics and feedback.",
					},
					{
						feature:
							"Collaborate with marketing, design, and other teams to ensure cohesive messaging and brand consistency.",
					},
					{
						feature: "Stay updated on content trends and best practices.",
					},
				],
				details:
					"Content Strategists are responsible for planning, creating, and managing content to support marketing and communication goals.",
				subheading:
					"Take your brand narrative to the next level with our Content Strategist service: compelling storytelling, audience engagement, and effective content planning. Transform your approach to content creation",
			},

			{
				detail_id: "Marketing",
				id: "Social Media Manager",
				heading: "Social Media Manager",
				imgSrc: marketingMedia,
				price: 230,
				features: [
					{
						feature:
							"Develop social media strategies to meet business objectives.",
					},
					{
						feature:
							"Create and curate engaging content for social media channels.",
					},
					{
						feature:
							"Monitor and respond to comments and messages from followers.",
					},
					{
						feature:
							"Analyze social media metrics to track performance and identify opportunities for improvement.",
					},
					{
						feature: "Stay updated on social media trends and best practices.",
					},
				],
				details:
					"Social Media Managers are responsible for managing an organization's presence on social media platforms to build brand awareness and engage with customers.",
				subheading:
					"Boost your brand presence with our Social Media Manager service: strategic campaigns, audience engagement, and effective social media planning. Elevate your social media strategy.",
			},
		],
	},
	{
		id: "AI",
		heading: "Your journey to AI excellence begins here. ",
		subheading:
			"Our AI department is dedicated to crafting innovative solutions, refining algorithms, and implementing cutting-edge technologies. Join us in exploring the future of intelligent solutions tailored to your business needs.",
		imgSrc: ai,
		content: [
			{
				detail_id: "AI",
				id: "Data Scientist",
				heading: "Data Scientist",
				imgSrc: aiData,
				price: 480,
				features: [
					{
						feature: "Collect and preprocess data from various sources.",
					},
					{
						feature:
							"Apply statistical and machine learning techniques to analyze data and generate insights.",
					},
					{
						feature:
							"Develop predictive models to forecast trends and outcomes.",
					},
					{
						feature:
							"Communicate findings to stakeholders through visualizations and reports.",
					},
					{
						feature:
							"Collaborate with cross-functional teams to implement data-driven solutions.",
					},
				],
				details:
					"Data Scientists are responsible for analyzing large datasets to extract insights and inform business decisions.",
				subheading:
					"Enhance data-driven insights with our Data Scientist service: advanced analytics, predictive modelling, data mining, and timely insights. Streamline your approach to informed decision-making.",
			},
			{
				detail_id: "AI",
				id: "AI Expert",
				heading: "AI Expert",
				imgSrc: aiExpert,
				price: 295,
				features: [
					{
						feature:
							"Design and develop AI algorithms and models using machine learning techniques.",
					},
					{
						feature: "Train and fine-tune AI models using relevant data sets.",
					},
					{
						feature:
							"Deploy AI solutions and integrate them into existing systems and workflows.",
					},
					{
						feature:
							"Monitor AI models for performance and accuracy, making adjustments as needed.",
					},
					{
						feature:
							"Stay updated on AI research and advancements to incorporate into projects.",
					},
				],
				details:
					"AI Experts specialize in developing and deploying artificial intelligence solutions to solve business problems and improve processes.",
				subheading:
					"Elevate your organization's capabilities with our AI Expert service: cutting-edge algorithms, machine learning, and advanced AI solutions. Transform your approach to innovation and problem-solving.",
			},
		],
	},
	{
		id: "Information Technology",
		heading: "Elevate your tech landscape with IT excellence",
		subheading:
			"Explore a path to optimal performance tailored to your business. Gain confidence in reporting and clarity within your IT strategies.",
		imgSrc: infoTech,
		content: [
			{
				detail_id: "Information Technology",
				id: "IT Systems Administrator",
				heading: "IT Systems Administrator",
				imgSrc: infoTechIT,
				price: 425,
				features: [
					{
						feature: "Install, configure, and maintain hardware and software.",
					},
					{
						feature: "Monitor system performance and troubleshoot issues.",
					},
					{
						feature: "Ensure data security and backup procedures are in place.",
					},
					{
						feature: "Provide technical support and training to end-users.",
					},
					{
						feature: "Implement and maintain IT policies and procedures.",
					},
				],
				details:
					"IT Systems Administrators are responsible for managing and maintaining an organization's computer systems and networks.",
				subheading:
					"Optimize your digital infrastructure with our IT Systems Administrator service: proactive system maintenance, efficient troubleshooting, and seamless network management.",
			},
			{
				detail_id: "Information Technology",
				id: "Automations Specialist",
				heading: "Automations Specialist",
				imgSrc: infoTechAutomate,
				price: 1900,
				features: [
					{
						feature:
							"Analyze existing processes and identify opportunities for automation.",
					},
					{
						feature:
							"Design and develop automation solutions using software tools and programming languages.",
					},
					{
						feature:
							"Test and implement automation workflows to ensure functionality and reliability.",
					},
					{
						feature:
							"Monitor and maintain automated processes, making adjustments as needed.",
					},
					{
						feature:
							"Train employees on using automated systems and processes.",
					},
				],
				details:
					"Automations Specialists design, develop, and implement automated processes to streamline business operations and improve efficiency.",
				subheading:
					"Establish a strong online presence with a responsive Website or web application both visually appealing and functional.",
			},
			{
				detail_id: "Information Technology",
				id: "Web development",
				heading: "Web development",
				imgSrc: infoTechWeb,
				price: 1230,
				features: [
					{
						feature: "Oversee financial planning, budgeting, and forecasting.",
					},
					{
						feature: "Manage cash flow and investment strategies.",
					},
					{
						feature: "Assess and mitigate financial risks.",
					},
					{
						feature:
							"Provide financial insights to support strategic decision-making.",
					},
					{
						feature:
							"Communicate financial performance to stakeholders and investors.",
					},
				],
				details:
					"The Chief Financial Officer (CFO) is a senior executive responsible for managing the financial actions of a company.",
				subheading:
					"Our team can help streamline your data flow and connect your systems, resulting in an improvement of processes and information accessibility.",
			},
			{
				detail_id: "Information Technology",
				id: "Integrations Specialist",
				heading: "Integrations Specialist",
				imgSrc: infoTechIntegrate,
				price: 1630,
				features: [
					{
						feature:
							"Assess integration needs and requirements based on business processes.",
					},
					{
						feature:
							"Develop and implement integration solutions using APIs, middleware, or custom software tools.",
					},
					{
						feature:
							"Test and troubleshoot integrations to ensure data accuracy and system compatibility.",
					},
					{
						feature:
							"Document integration processes and provide training to end-users.",
					},
					{
						feature:
							"Collaborate with vendors and internal teams to optimize system integrations.",
					},
				],
				details:
					"Integrations Specialists are responsible for integrating different software systems and applications to ensure seamless data flow and functionality.",
				subheading:
					"Our team can help streamline your data flow and connect your systems, resulting in an improvement of processes and information accessibility.",
			},
		],
	},
	{
		id: "Payroll",
		heading: "Optimize your workforce management with Payroll & HR efficiency ",
		subheading:
			"Explore a tailored path for seamless operations aligned with your business needs. Gain confidence in reporting and clarity in your payroll and HR strategies.",
		imgSrc: payroll,
		content: [
			{
				detail_id: "Payroll",
				id: "Payroll Administrator",
				heading: "Payroll Administrator",
				imgSrc: payrollAdmin,
				price: 280,
				features: [
					{
						feature:
							"Calculate and process employee wages, salaries, and deductions.",
					},
					{
						feature:
							"Maintain accurate records of employee hours worked, vacation time, and benefits.",
					},
					{
						feature: "Ensure compliance with payroll regulations and tax laws.",
					},
					{
						feature:
							"Respond to employee inquiries regarding payroll issues and discrepancies.",
					},
					{
						feature:
							"Collaborate with HR and finance teams to ensure payroll processes are efficient and accurate.",
					},
				],
				details:
					"Payroll Administrators are responsible for processing and managing payroll for employees, ensuring accurate and timely payment.",
				subheading:
					"Streamline payroll processes with our Payroll Administration service: accurate payroll calculations, tax withholdings, timely filings, and compliance with employment regulations.",
			},
			{
				detail_id: "Payroll",
				id: "HR Manager",
				heading: "HR Manager",
				imgSrc: payrollHR,
				price: 825,
				features: [
					{
						feature:
							"Develop and implement HR strategies and policies aligned with business objectives.",
					},
					{
						feature:
							"Manage recruitment processes, including sourcing, interviewing, and onboarding.",
					},
					{
						feature:
							"Handle employee relations issues, such as grievances and disciplinary actions.",
					},
					{
						feature: "Ensure compliance with employment laws and regulations.",
					},
					{
						feature:
							"Provide guidance and support to employees and managers on HR-related matters.",
					},
				],
				details:
					"HR Managers are responsible for overseeing human resources functions, including recruitment, employee relations, and policy development.",
				subheading:
					"Streamline financial operations with our Controller service: efficient financial management, accurate reporting, internal controls, and compliance expertise.",
			},
		],
	},
];
export const COMPANY_BIO = {
	PHONE: "1-844-777-8231",
	EMAIL: "sales@fractionaldepartments.com",
	EMAIL1: "it@businessn.com",
};

export const MORE_FEATURES = {
	meeting: [
		{ item: "Ensure compliance with accounting and payroll regulations" },
		{ item: "Access expert valuable guidance on financial matters" },
		{
			item: "Reduce the risk of errors and inaccuracies in accounting and payroll",
		},
		{ item: "Make informed decisions about budgeting and forecasting" },
		{ item: "Stay focused on core competencies and objectives" },
	],
	call: [
		{
			item: "Receive expert guidance on branding strategies, content creation and social media management",
		},
		{ item: "Ensure compliance with legal and regulatory requirements" },
		{
			item: "Free up time and resources by focusing on business growth and development",
		},
		{
			item: "Develop a robust social media presence, and run effective marketing campaigns",
		},
		{ item: "Accomplish greater scalability and growth potential" },
	],
};
