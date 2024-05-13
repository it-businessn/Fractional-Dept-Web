"use client";

import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Stack,
	useDisclosure,
} from "@chakra-ui/react";
import call from "../../assets/images/moreinfo/call.png";
import meeting from "../../assets/images/moreinfo/meeting.jpg";
import FeatureItem from "./FeatureItem";
import GetStartedForm from "./GetStartedForm";

export default function MoreFeatures() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const FEATURES = [
		{
			src: meeting,
			id: "meeting",
			sub1: "Partner with us to take your business to the",
			sub2: "next level",
		},
		{
			src: call,
			id: "call",
			sub1: "Let us do the heavy lifting,",
			sub2: "focus on execution",
		},
	];
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
				{FEATURES.map(({ id, src, sub1, sub2 }) => (
					<FeatureItem
						py={id === "call" && 8}
						key={id}
						src={src}
						sub1={sub1}
						sub2={sub2}
						id={id}
						onClick={onOpen}
					/>
				))}
			</Stack>
			<Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody p={"2em"}>
						<GetStartedForm onClose={onClose} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
