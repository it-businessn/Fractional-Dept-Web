import {
	Button,
	Flex,
	HStack,
	Heading,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
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

	const isMobile = window.innerWidth <= 768;

	const mainContent = () => (
		<>
			<Text
				ml={"2em"}
				textAlign={"center"}
				w={"60vw"}
				fontSize={{ base: "md", md: "2xl" }}
				display={"flex"}
				alignItems={"center"}
			>
				We bring best practices to your operation by enhancing your staff with
				one or more of our highly qualified partners in the key departments.
			</Text>
			<Link to="about" name="my-link">
				<Button
					display={"flex"}
					alignItems={"center"}
					fontSize={"xs"}
					bg={"brand.200"}
					color={"brand.300"}
					textTransform="uppercase"
					p={"1em"}
					minW={"100px !important"}
				>
					About us
				</Button>
			</Link>
		</>
	);

	return (
		<>
			<Stack
				bg={{ base: "brand.600", md: "brand.100" }}
				justifyContent="center"
				direction={{ base: "column", lg: "row" }}
				borderRadius={"28px"}
			>
				<AnimatedComponent zoomIn>
					<VStack w={"100vw"}>
						<HStack spacing={5} mx={{ base: "2em", md: "auto" }} mt={"2em"}>
							<Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
								Cultivate Growth.
							</Heading>
							<Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
								Inspiring Culture.
							</Heading>
							<Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
								Achieving Excellence.
							</Heading>
						</HStack>

						<Flex
							align={"center"}
							justify={"center"}
							height={"fit-content"}
							position={{ md: "relative" }}
							direction={{ sm: "column", lg: "row" }}
						>
							{isMobile ? (
								<VStack m={"1em auto"}>
									<Text m={"1em 2em"} fontSize={{ base: "md", md: "2xl" }}>
										We bring best practices to your operation by enhancing your
										staff with one or more of our highly qualified partners in
										the key departments.
									</Text>
									<Link to="about" name="my-link">
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
											minW={"100px !important"}
										>
											About us
										</Button>
									</Link>

									{/* <VimeoPlayer videoUrl={vimeoVideoUrl} /> */}
								</VStack>
							) : (
								<>
									<Flex
										mb={"1em"}
										justifyContent={"space-around"}
										w={{ xl: "75vw" }}
									>
										{mainContent()}
									</Flex>
								</>
							)}
						</Flex>
					</VStack>
				</AnimatedComponent>
			</Stack>
		</>
	);
}
