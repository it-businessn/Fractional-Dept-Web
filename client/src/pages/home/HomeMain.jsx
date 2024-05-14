import {
	Heading,
	List,
	ListIcon,
	ListItem,
	Stack,
	VStack,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import ResponsiveText from "../../components/ResponsiveText";
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
		<List spacing={3}>
			{TAGS?.map((text) => (
				<ListItem>
					<ResponsiveText
						text={
							<>
								<ListIcon
									as={MdCheckCircle}
									color="brand.200"
									d="inline-flex"
									verticalAlign={"middle"}
								/>
								{text}
							</>
						}
					/>
				</ListItem>
			))}
		</List>
	);
	const TAGS = ["No recruitment fees.", "Start Right Away.", "Cancel Anytime."];
	return (
		<Stack
			bg={{ base: "brand.600", md: "var(--bg)" }}
			justifyContent="center"
			direction={{ base: "column", lg: "row" }}
			borderRadius={"28px"}
		>
			<AnimatedComponent zoomIn>
				<VStack mx={"auto"} w={"65%"} spacing={"1em"}>
					<Heading
						fontSize={{ base: "2xl", md: "3xl" }}
						textAlign={{ base: "center" }}
						lineHeight={"10"}
					>
						We bring best practices to your operation by enhancing your staff
						with one or more of our highly qualified partners in the key
						departments.
					</Heading>

					{mainContent()}
					<Link to="about" name="my-link">
						<PrimaryButton title="About us" />
					</Link>
				</VStack>
			</AnimatedComponent>
		</Stack>
	);
}
