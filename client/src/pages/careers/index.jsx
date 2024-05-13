import {
	Box,
	Center,
	Flex,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	SimpleGrid,
	Stack,
	Text,
	useBreakpointValue,
	useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import careers from "../../assets/images/services/careers.jpg";
import HighlightText from "../../components/HighlightText";
import ResponsiveText from "../../components/ResponsiveText";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import AnimatedComponent from "../home/AnimatedComponent";
import CareersForm from "./CareersForm";
import Section from "./Section";

export default function Careers() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [message, setMessage] = useState("");
	const isMobile = useBreakpointValue({ base: true, sm: false });
	const SECTIONS = [
		{
			id: "Flexibility",
			title: "Flexibility",
			text: "Work from home and flexible schedules means for many positions you can accomplish the work on your time – leaving more for work life balance.",
		},
		{
			id: "stages",
			title: "For all stages of life",
			text: "We welcome partners with varying degrees of experience – maybe you would like to work part time after having retired or are looking for an exciting new career we like to be open.",
		},
		{
			id: "change",
			title: "Be part of positive change",
			text: "At FD we like to make positive impacts in the organizations we work in as we always strive to implement best practices.",
		},
	];
	return (
		<div>
			{/* <Banner title={"Join Us"} /> */}
			<AnimatedComponent zoomIn>
				<Stack
					minH={"50vh"}
					maxW={"1280px"}
					m={"auto"}
					mt={"3em"}
					direction={{ base: "column", md: "row" }}
				>
					<Flex flex={1} p={"2em"}>
						<Image
							borderRadius={"28px"}
							alt={"Login Image"}
							objectFit={"cover"}
							src={careers}
						/>
					</Flex>
					<Flex p={2} flex={1} align={"center"} justify={"center"}>
						<Stack spacing={6} w={{ base: "90%", md: "full" }} maxW={"lg"}>
							<HighlightText
								as={"span"}
								sub1={"Careers at Fractional"}
								sub2={"Departments"}
								bottom={1.8}
							/>
							<ResponsiveText text="Are you ready to make a difference?" />

							{!isMobile && (
								<>
									<Stack direction={{ base: "column", md: "row" }}>
										<PrimaryButton
											title="Apply Now"
											onClick={onOpen}
											isDisabled={message}
										/>
									</Stack>
									{message && <Text>{message}</Text>}
								</>
							)}
						</Stack>
					</Flex>
				</Stack>
				<Box p={{ base: 5, md: "3em" }}>
					<SimpleGrid
						columns={{ base: 1, lg: 3 }}
						spacing={{ base: 5, md: 10 }}
						maxW={"1280px"}
						mx={"auto"}
					>
						{SECTIONS.map(({ id, title, text }) => (
							<Section title={title} key={id} text={text} />
						))}
					</SimpleGrid>
				</Box>
				<Center pb={"2em"}>
					<Stack direction={{ base: "column", md: "row" }}>
						<PrimaryButton title="Apply Now" onClick={onOpen} />
					</Stack>
				</Center>
			</AnimatedComponent>

			<Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody p={"2em"}>
						<CareersForm setMessage={setMessage} onClose={onClose} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	);
}
