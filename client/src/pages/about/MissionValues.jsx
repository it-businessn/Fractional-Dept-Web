import { Box, Center, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import Statement from "./Statement";

export default function MissionValues() {
	const MISSION = [
		{
			statement: `Founded by a group of professionals driven by the recognition
	of a critical need, our organization is dedicated to
	delivering elevated standards to companies of all sizes. We
	emerged from a shared realization that professional excellence
	should be accessible across the spectrum of businesses. Our
	unwavering passion extends beyond this objective; it
	encompasses providing organizations with the necessary
	resources to not only navigate but excel in an increasingly
	intricate business environment.`,
		},
		{
			statement: `At the core of our mission is the commitment to instill a
		winning culture within the fabric of the organizations we
		serve. We understand that success is not merely a destination
		but a culture that breeds resilience, innovation, and
		continuous improvement. While our primary focus is on
		delivering resources for operational excellence, we firmly
		believe that a winning culture is equally vital for sustained
		growth and prosperity.`,
		},
		{
			statement: `As we work with diverse companies, our satisfaction lies in
		witnessing their organic growth and evolution. Beyond the
		metrics of success, our true measure of accomplishment is
		derived from seeing our clients navigate the complexities of
		the business landscape and emerge knowing we have “ your back”
		. We take pride in contributing to the professional standards
		but also to the cultivation of an environment where success is
		the norm. Growth is an ingrained part of the organizational
		DNA.`,
		},
	];
	const VISION = [
		{
			statement: `Sustainability - We believe that the best solutions are
			sustainable. Solutions that benefit the overall health and
			bottom line of the organization allow organizations to turn
			around, scale and become more efficient. This structure
			mindset can help companies provide a more stable environment
			for owners, employees and other stakeholders.`,
		},
		{
			statement: `Dedication - We also believe in dedication and continuity; we
			believe in connections that deliver value over the long term.`,
		},
	];

	const VALUES = [
		{
			heading: "Our Mission",
			list: MISSION,
		},
		{
			heading: "Vision",
			list: VISION,
		},
		{
			heading: "Our People",
			content: (
				<Text
					fontSize={{ base: "md", lg: "lg" }}
					textAlign={{ base: "justify", md: "start" }}
				>
					Our company is only as strong as the collective experience, vision and
					know-how of each partner in the firm. We come from diverse backgrounds
					and have played key roles in all stages of businesses – from start-ups
					to mature businesses.
				</Text>
			),
		},
	];
	return (
		<>
			<Box p={"3em"}>
				<SimpleGrid
					columns={{ base: 1, md: 3 }}
					spacing={10}
					maxW={"1450px"}
					mx={"auto"}
				>
					{VALUES.map((statement) => (
						<Statement statement={statement} key={statement.heading} />
					))}
				</SimpleGrid>
			</Box>
			<Center pb={"2em"}>
				<Stack direction={{ base: "column", md: "row" }}>
					<Link to="/careers" name="my-link">
						<PrimaryButton title={"Join our Team"} />
					</Link>
				</Stack>
			</Center>
		</>
	);
}
