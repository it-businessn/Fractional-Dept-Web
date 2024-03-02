import {
	Box,
	Button,
	Center,
	Flex,
	HStack,
	Heading,
	Icon,
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
import { MdCheckCircle } from "react-icons/md";
import careers from "../../assets/images/services/careers.jpg";
import AnimatedComponent from "../home/AnimatedComponent";
import CareersForm from "./CareersForm";

export default function Careers() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [message, setMessage] = useState("");
	const isMobile = useBreakpointValue({ base: true, sm: false });

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
						<Stack spacing={6} w={"full"} maxW={"lg"}>
							<Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
								Careers at Fractional &nbsp;
								<Text
									as={"span"}
									position={"relative"}
									_after={{
										content: "''",
										width: "full",
										height: "20%",
										position: "absolute",
										bottom: 1.8,
										left: 0,
										bg: "linear-gradient(90deg, rgba(13,234,251,1) 0%, rgba(40,161,242,1) 25%, rgba(51,130,240,1) 50%, rgba(81,45,230,1) 100%)",
									}}
								>
									Departments
								</Text>
							</Heading>
							<Text fontSize={{ base: "sm", md: "xl" }}>
								Are you ready to make a difference?
							</Text>
							{!isMobile && (
								<>
									<Stack direction={{ base: "column", md: "row" }}>
										<Button
											fontSize={"xs"}
											display={{ base: "flex", md: "inline-flex" }}
											bg={"brand.200"}
											color={"brand.300"}
											textTransform="uppercase"
											p={"1em"}
											isDisabled={message}
											onClick={onOpen}
										>
											Apply Now
										</Button>
									</Stack>
									{message && <Text>{message}</Text>}
								</>
							)}
						</Stack>
					</Flex>
				</Stack>
				<Box p={"3em"}>
					<SimpleGrid
						columns={{ base: 1, lg: 3 }}
						spacing={10}
						maxW={"1280px"}
						mx={"auto"}
					>
						<Stack>
							<Heading
								color={"brand.500"}
								fontSize={{ base: "3xl", md: "4xl" }}
								textAlign={{
									base: "center",
									md: "center",
									lg: "start",
								}}
							>
								Flexibility
							</Heading>
							<HStack align={"flex-start"}>
								<Icon as={MdCheckCircle} color="purple.500" />
								<Text
									fontSize={{ base: "md", md: "xl" }}
									textAlign={{ base: "justify", md: "start" }}
								>
									Work from home and flexible schedules means for many positions
									you can accomplish the work on your time – leaving more for
									work life balance.
								</Text>
							</HStack>
						</Stack>
						<Stack>
							<Heading
								color={"brand.500"}
								fontSize={{ base: "3xl", md: "4xl" }}
								textAlign={{
									base: "center",
									md: "center",
									lg: "start",
								}}
							>
								For all stages of life
							</Heading>
							<HStack align={"flex-start"}>
								<Icon as={MdCheckCircle} color="purple.500" />
								<Text
									fontSize={{ base: "md", md: "xl" }}
									textAlign={{ base: "justify", md: "start" }}
								>
									We welcome partners with varying degrees of experience – maybe
									you would like to work part time after having retired or are
									looking for an exciting new career we like to be open.
								</Text>
							</HStack>
						</Stack>
						<Stack>
							<Heading
								color={"brand.500"}
								fontSize={{ base: "3xl", md: "4xl" }}
								textAlign={{
									base: "center",
									md: "center",
									lg: "start",
								}}
							>
								Be part of positive change
							</Heading>
							<HStack align={"flex-start"}>
								<Icon as={MdCheckCircle} color="purple.500" />
								<Text
									fontSize={{ base: "md", md: "xl" }}
									textAlign={{ base: "justify", md: "start" }}
								>
									At FD we like to make positive impacts in the organizations we
									work in as we always strive to implement best practices.
								</Text>
							</HStack>
						</Stack>
					</SimpleGrid>
				</Box>
				<Center pb={"2em"}>
					<Stack direction={{ base: "column", md: "row" }}>
						<Button
							fontSize={"xs"}
							display={{ base: "flex", md: "inline-flex" }}
							bg={"brand.200"}
							color={"brand.300"}
							textTransform="uppercase"
							p={"1em"}
							onClick={onOpen}
						>
							Apply Now
						</Button>
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
