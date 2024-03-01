import {
	Button,
	Center,
	Container,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import * as api from "../../services";

export default function CareersForm({ onClose, setMessage }) {
	const [formData, setFormData] = useState({
		name: "",
		phoneNumber: "",
		email: "",
		resume: null,
	});
	const [submitting, setSubmitting] = useState(false);
	const [resumes, setResumes] = useState();
	useEffect(() => {
		const fetchResumes = async () => {
			try {
				const response = await api.getResumes();
				// const blob = await response.blob();

				// Create Object URL from Blob
				// const imageUrl = URL.createObjectURL(response);

				// setImageSrc(imageUrl);
				const paragraph = document.createElement("p");

				// Set the background image style for the paragraph
				paragraph.style.backgroundImage = response;
				paragraph.style.backgroundSize = "cover";
				paragraph.style.width = "300px"; // Set the width as needed
				paragraph.style.height = "200px"; // Set the height as needed
				const galleryContainer = document.querySelector("#me");
				galleryContainer.appendChild(paragraph);
				// document.createElement("<p>").style.backgroundImage = response;
				// console.log(await response.arraybuffer());
				// Convert ArrayBuffer to Blob
				// const blob = new Blob([arrayBuffer], { type: "image/jpeg" });

				// Create Object URL from Blob
				// const imageUrl = URL.createObjectURL(blob);
				// setResumes(imageUrl);

				// setResumes(response);

				// const blob = await response.blob();
				// const imageUrl = URL.createObjectURL(blob);
				setResumes(response);
			} catch (error) {
				console.error(error);
			}
		};
		fetchResumes();
	}, []);

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleFileChange = (e) => {
		setFormData({ ...formData, resume: e.target.files[0] });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);

		const data = new FormData();
		data.append("name", formData.name);
		data.append("email", formData.email);
		data.append("phoneNumber", formData.phoneNumber);
		data.append("resume", formData.resume);

		try {
			const response = await api.addResume(data);

			setMessage(response.data.message);
			onClose();
		} catch (error) {
			setMessage("An error occurred while submitting the application.");
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			<Heading
				id="me"
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
			<Container maxW="md" mt={10}>
				<VStack spacing={4}>
					{/* <Text fontSize="xl" fontWeight="bold">
            Apply Now
          </Text> */}
					<form onSubmit={handleSubmit}>
						<FormControl id="name" isRequired>
							<FormLabel>Name</FormLabel>
							<Input type="text" name="name" onChange={handleInputChange} />
						</FormControl>
						<FormControl id="phoneNumber" isRequired>
							<FormLabel>Contact Number</FormLabel>
							<Input
								type="text"
								name="phoneNumber"
								onChange={handleInputChange}
							/>
						</FormControl>
						<FormControl id="email" isRequired>
							<FormLabel>Email</FormLabel>
							<Input type="email" name="email" onChange={handleInputChange} />
						</FormControl>
						<FormControl id="resume" isRequired>
							<FormLabel>Resume</FormLabel>
							<Input
								type="file"
								accept=".pdf, .doc, .docx"
								name="resume"
								onChange={handleFileChange}
							/>
						</FormControl>
						<Center>
							<Stack
								direction={{
									base: "column",
									md: "row",
								}}
							>
								<Button
									fontSize={"xs"}
									display={{
										base: "flex",
										md: "inline-flex",
									}}
									bg={"brand.200"}
									color={"brand.300"}
									textTransform="uppercase"
									p={"1em"}
									type="submit"
									isLoading={submitting}
									loadingText="Submitting"
								>
									Submit Application
								</Button>
							</Stack>
						</Center>
					</form>
				</VStack>
			</Container>
		</>
	);
}
