import {
	Box,
	Button,
	Center,
	Heading,
	List,
	ListIcon,
	ListItem,
	SimpleGrid,
	Stack,
	Text,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { Link } from "react-router-dom";

export default function MissionValues() {
	return (
		<>
			<Box p={"3em"}>
				<SimpleGrid
					columns={{ base: 1, md: 3 }}
					spacing={10}
					maxW={"1180px"}
					mx={"auto"}
				>
					<Stack>
						<Heading
							color={"brand.500"}
							fontSize={{ base: "3xl", md: "4xl" }}
							textAlign={{ base: "center", md: "start" }}
						>
							Our Mission
						</Heading>
						<Text
							fontSize={{ base: "md", lg: "lg" }}
							textAlign={{ base: "justify", md: "start" }}
						>
							Founded by a group of professionals that saw a need to to deliver
							professional standards to companies of all sizes. We have a
							passion to give organizations resources to compete in an ever more
							complex business environment.
						</Text>
					</Stack>
					<Stack>
						<Heading
							color={"brand.500"}
							fontSize={{ base: "3xl", md: "4xl" }}
							textAlign={{ base: "center", md: "start" }}
						>
							Vision
						</Heading>
						<List spacing={3}>
							<ListItem>
								<Text
									fontSize={{ base: "md", lg: "lg" }}
									textAlign={{ base: "justify", md: "start" }}
								>
									<ListIcon as={MdCheckCircle} color="purple.500" />
									Sustainability - We believe that the best solutions are
									sustainable. Solutions that benefit the overall health and
									bottom line of the organization allow organizations to turn
									around, scale and become more efficient. This structure
									mindset can help companies provide a more stable environment
									for owners, employees and other stakeholders.
								</Text>
							</ListItem>
							<ListItem>
								<Text
									fontSize={{ base: "md", lg: "lg" }}
									textAlign={{ base: "justify", md: "start" }}
								>
									<ListIcon as={MdCheckCircle} color="purple.500" />
									Dedication - We also believe in dedication and continuity; we
									believe in connections that deliver value over the long term.
								</Text>
							</ListItem>
						</List>
					</Stack>
					<Stack>
						<Heading
							color={"brand.500"}
							fontSize={{ base: "3xl", md: "4xl" }}
							textAlign={{ base: "center", md: "start" }}
						>
							Our People
						</Heading>
						<Text
							fontSize={{ base: "md", lg: "lg" }}
							textAlign={{ base: "justify", md: "start" }}
						>
							Our company is only as strong as the collective experience, vision
							and know-how of each partner in the firm. We come from diverse
							backgrounds and have played key roles in all stages of businesses
							– from start-ups to mature businesses.
						</Text>
					</Stack>
				</SimpleGrid>
			</Box>
			<Center pb={"2em"}>
				<Stack direction={{ base: "column", md: "row" }}>
					<Link to="/careers" name="my-link">
						<Button
							fontSize={"xs"}
							display={{ base: "flex", md: "inline-flex" }}
							bg={"brand.200"}
							color={"brand.300"}
							textTransform="uppercase"
							p={"1em"}
						>
							Join our Team
						</Button>
					</Link>
				</Stack>
			</Center>
		</>
	);
}
