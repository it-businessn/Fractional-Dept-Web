import { EmailIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Center,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	Icon,
	Input,
	Radio,
	RadioGroup,
	Select,
	SimpleGrid,
	Stack,
	Text,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { COMPANY_BIO } from "../../constant";
import * as api from "../../services";
import AnimatedComponent from "../home/AnimatedComponent";
import Feature from "../services/Feature";

export default function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const form = useRef();
	const toast = useToast();

	const defaultForm = {
		name: "",
		email: "",
		phone: "",
		province: "Alberta",
		inquiryType: "Partnership Opportunity",
		message: "",
		agreeToReceiveInfo: "1",
	};

	const [emailData, setEmailData] = useState(defaultForm);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(null);
	const isFormDataFilled = Object.values(emailData).every(
		(value) => value !== "",
	);

	const handleInputChange = (e) => {
		setEmailData({ ...emailData, [e.target.name]: e.target.value });
	};

	const handleRadioChange = (value) => {
		setEmailData({ ...emailData, agreeToReceiveInfo: value });
	};

	const showToast = (type, title, description) =>
		toast({
			title,
			description,
			status: type,
			duration: 5000,
			isClosable: true,
		});
	const sendEmail = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const response = await api.sendEmail(emailData);
			setMessage(response.data.message);
			setIsLoading(false);

			showToast("success", "Email Sent Successfully", "");
		} catch (error) {
			console.error("Error sending email:", error);
			setMessage("Error sending email. Please try again.");

			showToast(
				"error",
				"Error Sending Email",
				"There was an error sending the email. Please try again.",
			);
		}
	};
	return (
		<Stack align={"center"} minW={"100vw"}>
			<AnimatedComponent slideLeft>
				<Stack
					p={{ base: "1em", md: "5em" }}
					maxW={{ base: "100%", lg: "1190px" }}
					margin="0 auto"
				>
					<Heading
						textAlign="center"
						fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
					>
						Contact Us To Find Out More About Our Fractional Service
					</Heading>
					<br />
					<Text textAlign="center" fontSize={{ base: "sm", md: "xl" }}>
						If you have a general query or would like to find out more about our
						Fractional service please use the contact form below and we will get
						back to you shortly. We look forward to hearing from you.
					</Text>
					<Stack boxShadow={"0 0 10px #c1c1c1"} p="2em">
						<form ref={form} onSubmit={sendEmail}>
							<FormControl my={2}>
								<Input
									type="text"
									placeholder="Name"
									name="name"
									value={emailData.name}
									onChange={handleInputChange}
									required
								/>
							</FormControl>
							<FormControl my={2}>
								<Input
									type="email"
									name="email"
									value={emailData.email}
									onChange={handleInputChange}
									required
									placeholder="Email"
								/>
								<FormHelperText fontSize={"xs"} ml={2} color={"green"}>
									We'll never share your email.
								</FormHelperText>
							</FormControl>
							<FormControl my={2}>
								<Input
									type="text"
									name="phone"
									value={emailData.phone}
									onChange={handleInputChange}
									required
									placeholder="Phone"
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Province</FormLabel>
								<Select
									// placeholder="Alberta"
									name="province"
									value={emailData.province}
									onChange={handleInputChange}
								>
									<option>Alberta</option>
									<option>British Columbia</option>
								</Select>
							</FormControl>
							<FormControl>
								<FormLabel>How may we direct your inquiry?</FormLabel>
								<Select
									name="inquiryType"
									value={emailData.inquiryType}
									onChange={handleInputChange}
									// placeholder="Partnership Opportunity"
								>
									<option>Partnership Opportunity</option>
								</Select>
							</FormControl>
							<FormControl my={2}>
								<Textarea
									name="message"
									value={emailData.message}
									onChange={handleInputChange}
									required
									rows={10}
									placeholder="Include your industry, # of employees, company URL & a brief description of what you're aiming to achieve."
									size="sm"
									resize={"horizontal"}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>
									I agree to receive information about Fractional services
								</FormLabel>
								<RadioGroup
									defaultValue={emailData.agreeToReceiveInfo}
									onChange={(value) => handleRadioChange(value)}
								>
									<Stack spacing={4} direction="column">
										<Radio value="2">Yes</Radio>
										<Radio value="3">No</Radio>
									</Stack>
								</RadioGroup>
							</FormControl>
							<Center>
								<Stack direction={{ base: "column", md: "row" }}>
									<Button
										type="submit"
										fontSize={"xs"}
										display={{
											base: "flex",
											md: "inline-flex",
										}}
										bg={"brand.200"}
										color={"brand.300"}
										textTransform="uppercase"
										p={"1em"}
										minW={"100px !important"}
										isLoading={isLoading}
										isDisabled={!isFormDataFilled}
									>
										Submit
									</Button>
								</Stack>
							</Center>
						</form>
					</Stack>
				</Stack>
			</AnimatedComponent>

			<AnimatedComponent zoomIn>
				<Box p={4}>
					<SimpleGrid
						columns={{ base: 1, md: 2 }}
						spacing={10}
						p={{ md: "2em" }}
					>
						<Feature
							icon={
								<Icon color={"brand.200"} as={BiSolidPhoneCall} w={10} h={10} />
							}
							title={COMPANY_BIO.PHONE}
							text={""}
						/>
						<Feature
							icon={<Icon color={"brand.200"} as={EmailIcon} w={10} h={10} />}
							title={COMPANY_BIO.EMAIL}
							text={""}
						/>
					</SimpleGrid>
				</Box>
			</AnimatedComponent>
		</Stack>
	);
}
