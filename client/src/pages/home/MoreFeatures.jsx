"use client";

import {
	Button,
	Center,
	Flex,
	HStack,
	Heading,
	Image,
	List,
	ListIcon,
	ListItem,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { MdCheckBox } from "react-icons/md";
import call from "../../assets/images/moreinfo/call.png";
import meeting from "../../assets/images/moreinfo/meeting.jpg";
import { MORE_FEATURES } from "../../constant";
import GetStartedForm from "./GetStartedForm";

export default function MoreFeatures() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Stack
				minH={"90vh"}
				bg={
					"radial-gradient(circle at 100%, #dad0d0 0%, rgb(241, 245, 248) 0%, rgb(241, 245, 248) 75%, #fff 50%), transparent"
				}
				direction={{ base: "column", md: "column" }}
				position={"relative"}
			>
				<Flex flexDir={{ base: "column", md: "row" }}>
					<Flex flex={1}>
						<Image
							boxSize={{ base: "100%", md: "70%" }}
							alt={"Login Image"}
							mt={{ base: "0", md: "6em" }}
							ml={{ base: "0", md: "7em" }}
							objectFit={"cover"}
							src={meeting}
							borderRadius={"28px"}
						/>
					</Flex>
					<Flex p={8} pb={0} flex={1} align={"center"} justify={"center"}>
						<Stack
							spacing={6}
							w={"full"}
							maxW={"md"}
							ml={{ base: "0", lg: "-9em" }}
						>
							<Heading fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}>
								Partner with us to take your business to the
								<Text
									as={"span"}
									position={"relative"}
									_after={{
										content: "''",
										width: "full",
										height: "20%",
										position: "absolute",
										bottom: 1,
										left: 0,
										bg: "linear-gradient(90deg, rgba(13,234,251,1) 0%, rgba(40,161,242,1) 25%, rgba(51,130,240,1) 50%, rgba(81,45,230,1) 100%)",
									}}
								>
									next level
								</Text>
							</Heading>
							<List spacing={3}>
								{MORE_FEATURES.meeting.map((item) => (
									<ListItem key={item}>
										<HStack align={"center"} justify={"flex-start"}>
											<ListIcon
												as={MdCheckBox}
												w={"2em"}
												h={"2em"}
												color="brand.300"
											/>
											<Text
												fontSize={{
													base: "sm",
													md: "xl",
												}}
												fontWeight={"bold"}
											>
												{item.item}
											</Text>
										</HStack>
									</ListItem>
								))}
							</List>
							<Stack direction={{ base: "column", md: "row" }}>
								<Button
									fontSize={"xs"}
									onClick={onOpen}
									display={{
										base: "flex",
										md: "inline-flex",
									}}
									bg={"brand.200"}
									color={"brand.300"}
									textTransform="uppercase"
									p={"1em"}
								>
									Get Started
								</Button>
							</Stack>
						</Stack>
					</Flex>
				</Flex>
				<Flex py={8} flexDir={{ base: "column", md: "row" }}>
					<Flex flex={1}>
						<Image
							boxSize={{ base: "100%", md: "70%" }}
							alt={"Login Image"}
							mt={{ base: "0", md: "6em" }}
							ml={{ base: "0", md: "7em" }}
							objectFit={"cover"}
							src={call}
							borderRadius={"28px"}
						/>
					</Flex>
					<Flex p={8} pb={0} flex={1} align={"center"} justify={"center"}>
						<Stack
							spacing={6}
							w={"full"}
							maxW={"md"}
							ml={{ base: "0", lg: "-9em" }}
						>
							<Heading fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}>
								Let us do the heavy lifting,&nbsp;
								<Text
									as={"span"}
									position={"relative"}
									_after={{
										content: "''",
										width: "full",
										height: "20%",
										position: "absolute",
										bottom: 1,
										left: 0,
										bg: "linear-gradient(90deg, rgba(13,234,251,1) 0%, rgba(40,161,242,1) 25%, rgba(51,130,240,1) 50%, rgba(81,45,230,1) 100%)",
									}}
								>
									focus on execution
								</Text>
							</Heading>
							<List spacing={3}>
								{MORE_FEATURES.call.map((item) => (
									<ListItem key={item}>
										<HStack align={"center"} justify={"flex-start"}>
											<ListIcon
												as={MdCheckBox}
												w={"2em"}
												h={"2em"}
												color="brand.300"
											/>
											<Text
												fontSize={{
													base: "sm",
													md: "xl",
												}}
												fontWeight={"bold"}
											>
												{item.item}
											</Text>
										</HStack>
									</ListItem>
								))}
							</List>
							<Stack direction={{ base: "column", md: "row" }}>
								<Button
									fontSize={"xs"}
									onClick={onOpen}
									display={{
										base: "flex",
										md: "inline-flex",
									}}
									bg={"brand.200"}
									color={"brand.300"}
									textTransform="uppercase"
									p={"1em"}
								>
									Get Started
								</Button>
							</Stack>
						</Stack>
					</Flex>
				</Flex>
			</Stack>
			<Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody p={"2em"}>
						<GetStartedForm />
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
									onClick={onClose}
								>
									Send
								</Button>
							</Stack>
						</Center>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
