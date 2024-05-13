import { Flex, HStack, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useBreakpointValue } from "../../services/common";
import AnimatedComponent from "./AnimatedComponent";

export default function WhoWeAre() {
	const vimeoVideoUrl =
		"https://player.vimeo.com/video/896338779?h=ce7f75baf4&autoplay=1&loop=1&mute=1&app_id=58479";

	const VimeoPlayer = () => {
		return (
			<iframe
				borderRadius={"28px"}
				src={vimeoVideoUrl}
				alt={"VimeoPlayer Image"}
				width="100%"
				height="400px"
				title="Vimeo Video"
				allowFullScreen
			/>
		);
	};

	const { isMobile, isIpad } = useBreakpointValue();

	const mainContent = () => (
		<Flex alignItems={"center"}>
			<Text
				m={{ base: "1em", lg: "auto" }}
				ml={!isMobile && !isIpad ? "2em" : "auto"}
				textAlign={{ base: "justify", lg: "center" }}
				w={{ base: "full", md: "60vw" }}
				fontSize={{ base: "md", md: "xl" }}
			>
				We bring best practices to your operation by enhancing your staff with
				one or more of our highly qualified partners in the key departments.
			</Text>
			<Link to="about" name="my-link">
				<PrimaryButton title="About us" />
			</Link>
		</Flex>
	);
	const TAGS = ["Cultivate Growth", "Inspire Culture", "Achieve Excellence"];
	return (
		<Stack
			bg={{ base: "brand.600", md: "var(--bg)" }}
			justifyContent="center"
			direction={{ base: "column", lg: "row" }}
			borderRadius={"28px"}
		>
			<AnimatedComponent zoomIn>
				<VStack mx={"auto"}>
					<HStack
						spacing={{ base: 1, md: 5, lg: 3 }}
						mx={{ base: "12px", md: "auto" }}
						mt={"2em"}
					>
						{TAGS.map((_) => (
							<Heading
								key={_}
								fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
								textAlign={{ base: "center", md: "left" }}
							>
								{_}
							</Heading>
						))}
					</HStack>

					<Flex
						align={"center"}
						justify={"center"}
						height={"fit-content"}
						position={{ md: "relative" }}
						direction={{ sm: "column", lg: "row" }}
					>
						{isMobile ? (
							<VStack pb={"1em"} w={"90%"}>
								{mainContent()}

								{/* <VimeoPlayer videoUrl={vimeoVideoUrl} /> */}
							</VStack>
						) : (
							<Flex
								mb={"1em"}
								justifyContent={"space-around"}
								w={{ xl: "75vw" }}
							>
								{mainContent()}
							</Flex>
						)}
					</Flex>
				</VStack>
			</AnimatedComponent>
		</Stack>
	);
}
