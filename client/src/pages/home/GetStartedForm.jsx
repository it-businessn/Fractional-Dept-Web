import {
	Button,
	Center,
	Checkbox,
	FormControl,
	FormLabel,
	HStack,
	Heading,
	Input,
	Select,
	Stack,
	Text,
	useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import * as api from "../../services";

export default function GetStartedForm({ onClose }) {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		ext: "",
		title: "",
		companyName: "",
		address: "",
		city: "",
		province: "",
		postalCode: "",
		totalEmployees: "",
		solution: "",
		inquiry: "",
		interests: [],
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const toast = useToast();
	const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
	const [message, setMessage] = useState(null);

	const handleCheckboxChange = (value) => {
		if (selectedCheckboxes.includes(value)) {
			setSelectedCheckboxes(
				selectedCheckboxes.filter((checkbox) => checkbox !== value),
			);
		} else {
			setSelectedCheckboxes([...selectedCheckboxes, value]);
		}
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const showToast = (type, title, description) => {
		toast({
			title,
			description,
			status: type,
			duration: 5000,
			isClosable: true,
		});
		onClose();
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		formData.interests = selectedCheckboxes;

		try {
			const response = await api.sendGetStartedEmail(formData);
			setMessage(response.data.message);
			setIsSubmitting(false);

			showToast(
				"success",
				`Thank you for your inquiry. An agent will get in touch with you shortly to discuss your interests and provide more information.`,
				"",
			);
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
		<>
			<Heading
				textAlign="center"
				fontSize={{
					base: "2xl",
					md: "3xl",
				}}
			>
				Thank you for your interest!
			</Heading>
			<Text textAlign="center" fontSize={{ base: "md", lg: "lg" }}>
				Please fill in the form below and our representative will contact you
				shortly.
			</Text>
			<form onSubmit={handleSubmit}>
				<Stack p="2em 0">
					<HStack>
						<FormControl>
							<Input
								type="text"
								placeholder="First Name"
								name="firstName"
								onChange={handleInputChange}
							/>
						</FormControl>
						<FormControl>
							<Input
								type="text"
								placeholder="Last Name"
								name="lastName"
								onChange={handleInputChange}
							/>
						</FormControl>
					</HStack>
					<HStack>
						<FormControl>
							<Input
								type="email"
								placeholder="Email"
								name="email"
								onChange={handleInputChange}
							/>
						</FormControl>
						<FormControl>
							<Input
								type="text"
								placeholder="Phone"
								name="phoneNumber"
								onChange={handleInputChange}
							/>
						</FormControl>
						<FormControl>
							<Input
								type="text"
								placeholder="Ext"
								name="ext"
								onChange={handleInputChange}
							/>
						</FormControl>
					</HStack>
					<HStack>
						<FormControl>
							<Input
								type="text"
								placeholder="Title"
								name="title"
								onChange={handleInputChange}
							/>
						</FormControl>
						<FormControl>
							<Input
								type="text"
								placeholder="Company name"
								name="companyName"
								onChange={handleInputChange}
							/>
						</FormControl>
					</HStack>
					<HStack>
						<FormControl>
							<Input
								type="text"
								placeholder="Address"
								name="address"
								onChange={handleInputChange}
							/>
						</FormControl>
						<FormControl>
							<Input
								type="text"
								placeholder="City/Town"
								name="city"
								onChange={handleInputChange}
							/>
						</FormControl>
					</HStack>
					<HStack>
						<FormControl>
							<Select
								placeholder="Province"
								name="province"
								onChange={handleInputChange}
							>
								<option>British Columbia</option>
							</Select>
						</FormControl>
						<FormControl>
							<Input
								type="text"
								placeholder="Postal code"
								name="postalCode"
								onChange={handleInputChange}
							/>
						</FormControl>
					</HStack>
					<HStack w={"100%"}>
						<FormControl>
							<Input
								type="text"
								placeholder="Number of employees"
								name="totalEmployees"
								onChange={handleInputChange}
							/>
						</FormControl>
						<FormControl>
							<Select
								placeholder="Current solution"
								name="solution"
								onChange={handleInputChange}
							>
								<option>British Columbia</option>
							</Select>
						</FormControl>
					</HStack>
					<HStack>
						<FormControl>
							<Select
								placeholder="How did you hear about us?"
								name="inquiry"
								onChange={handleInputChange}
							>
								<option>Partnership Opportunity</option>
							</Select>
						</FormControl>
					</HStack>
					<FormControl>
						<FormLabel>I'm interested in</FormLabel>
						<HStack justify={"space-evenly"}>
							<Stack direction={"column"}>
								<Checkbox
									onChange={() => handleCheckboxChange("Payroll and HR")}
								>
									Payroll and HR
								</Checkbox>
								<Checkbox onChange={() => handleCheckboxChange("Managed IT")}>
									Managed IT
								</Checkbox>
								<Checkbox onChange={() => handleCheckboxChange("Bookkeeping")}>
									Bookkeeping
								</Checkbox>
							</Stack>
							<Stack direction={"column"}>
								<Checkbox
									onChange={() =>
										handleCheckboxChange("C-Suite Level Services")
									}
								>
									C-Suite Level Services
								</Checkbox>
								<Checkbox onChange={() => handleCheckboxChange("Marketing")}>
									Marketing
								</Checkbox>
								<Checkbox
									onChange={() =>
										handleCheckboxChange("Artificial Intelligence")
									}
								>
									Artificial Intelligence
								</Checkbox>
							</Stack>
						</HStack>
					</FormControl>
				</Stack>
				<Center>
					<Stack
						direction={{
							base: "column",
							md: "row",
						}}
					>
						<Button
							isLoading={isSubmitting}
							fontSize={"xs"}
							display={{
								base: "flex",
								md: "inline-flex",
							}}
							bg={"brand.200"}
							color={"brand.300"}
							textTransform="uppercase"
							px={"3em"}
							type="submit"
						>
							Send
						</Button>
					</Stack>
				</Center>
			</form>
		</>
	);
}
