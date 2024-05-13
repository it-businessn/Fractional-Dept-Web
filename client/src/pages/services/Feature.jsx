import {
	Flex,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Stack,
	Text,
	VStack,
	useDisclosure,
} from "@chakra-ui/react";
import featureBanner from "../../assets/images/banner/featured.png";
import ResponsiveText from "../../components/ResponsiveText";
import ServiceProfile from "./ServiceProfile";

export default function Feature({
	title,
	text,
	icon,
	img,
	serviceBg,
	name,
	align = "center",
}) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Stack
			align={align}
			justify={"center"}
			className={
				!img && !icon
					? serviceBg
						? "service_bg"
						: "border_feature"
					: "service_bg img_feature"
			}
		>
			{icon && (
				<Flex
					w={16}
					h={16}
					align={"center"}
					justify={"center"}
					color={"white"}
					rounded={"full"}
					bg={"gray.100"}
					mb={1}
					mt={"1em"}
				>
					{icon}
				</Flex>
			)}
			{img && (
				<>
					<Flex
						position={"relative"}
						justify={"center"}
						w={"full"}
						backgroundImage={featureBanner}
						backgroundSize={"cover"}
						backgroundPosition={"center center"}
					>
						<Text
							textAlign={"center"}
							fontSize={{ base: "md", md: "xl" }}
							fontWeight={600}
							color={"brand.100"}
						>
							Featured Partner
						</Text>
					</Flex>
					<VStack w={"90%"} m={"0 auto"}>
						<Stack boxShadow={"4px 3px 4px 1px #b8bcf5"} mt={"-1em"}>
							<Image
								cursor={"pointer"}
								onClick={onOpen}
								objectFit={"cover"}
								src={img}
								alt={"Featured Image"}
								w={"100vw"}
								h={{ md: "22vh", lg: "33vh" }}
							/>
							<Text
								mt={"-10px"}
								w={"100%"}
								textAlign={"center"}
								color={"brand.500"}
								border={"2px solid #eee"}
								fontSize={{ base: "md", md: "2xl" }}
								fontWeight={600}
							>
								{name}
							</Text>
						</Stack>
					</VStack>
				</>
			)}
			<Modal isOpen={isOpen} onClose={onClose} size={"5xl"}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody p={"2em"}>
						<ServiceProfile />
					</ModalBody>
				</ModalContent>
			</Modal>
			<Text px={"1em"} fontSize={{ base: "md", md: "lg" }} fontWeight={600}>
				{title}
			</Text>
			{text && <ResponsiveText text={text} />}
		</Stack>
	);
}
