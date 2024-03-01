import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	SimpleGrid,
	Spacer,
	Stack,
	Text,
	UnorderedList,
	VStack,
} from "@chakra-ui/react";
import img from "../../assets/images/team/team-2.jpg";

export default function ServiceProfile() {
	return (
		<>
			<HStack bg={"brand.200"} p={"2em"} my={2}>
				<VStack>
					<Heading
						textAlign="center"
						fontSize={{
							base: "2xl",
							md: "3xl",
						}}
					>
						Jennifer
					</Heading>
					<Text textAlign="center" fontSize={{ base: "md", lg: "lg" }}>
						Bookkeeper
					</Text>
					<Button
						fontSize={"xs"}
						display={{ base: "flex", md: "inline-flex" }}
						bg={"brand.300"}
						color={"brand.100"}
						textTransform="uppercase"
						p={"1em"}
					>
						Contact Us
					</Button>
				</VStack>
				<Spacer />
				<Image
					cursor={"pointer"}
					objectFit={"cover"}
					src={img}
					alt={"Contact Image"}
					boxSize={200}
				/>
			</HStack>
			<Stack py={"2em"}>
				<Heading
					textAlign="center"
					fontSize={{
						base: "2xl",
						md: "3xl",
					}}
				>
					Jennifer Lawrence In 60 Seconds...
				</Heading>
				<Text textAlign="center" fontSize={{ base: "md", lg: "lg" }}>
					Having gained significant international finance experience working in
					both public and private companies, I now work with businesses owners
					to help them realize their desired outcomes. The Regional Director for
					Western Ontario since 2018, I have also served as a part-time CFO for
					a number of growing companies and volunteers with the local community
					foundation and soccer club.
				</Text>
			</Stack>
			<Stack py="2em">
				<Heading
					textAlign="center"
					fontSize={{
						base: "2xl",
						md: "3xl",
					}}
				>
					Specialist Skills
				</Heading>
				<SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
					<Stack
						bg={"brand.200"}
						color={"brand.300"}
						boxShadow={"4px 3px 4px 1px #b8bcf5"}
						align={"center"}
						p={"1em"}
						justify={"center"}
						className={"service_bg img_feature"}
					>
						<Text fontSize={{ base: "sm", md: "xl" }} fontWeight={600}>
							Banking Relationship
						</Text>
						<Text align={"center"} fontSize={{ base: "sm", md: "md" }}>
							simply text of the printing and typesetting industry. Lorem Ipsum
						</Text>
					</Stack>
					<Stack
						bg={"brand.200"}
						color={"brand.300"}
						boxShadow={"4px 3px 4px 1px #b8bcf5"}
						p={"1em"}
						align={"center"}
						justify={"center"}
						className={"service_bg img_feature"}
					>
						<Text fontSize={{ base: "sm", md: "xl" }} fontWeight={600}>
							Completed 10 years
						</Text>
						<Text align={"center"} fontSize={{ base: "sm", md: "md" }}>
							simply text of the printing and typesetting industry. Lorem Ipsum
						</Text>
					</Stack>
					<Stack
						bg={"brand.200"}
						color={"brand.300"}
						boxShadow={"4px 3px 4px 1px #b8bcf5"}
						p={"1em"}
						align={"center"}
						justify={"center"}
						className={"service_bg img_feature"}
					>
						<Text fontSize={{ base: "sm", md: "xl" }} fontWeight={600}>
							Corporate Finance
						</Text>
						<Text align={"center"} fontSize={{ base: "sm", md: "md" }}>
							simply text of the printing and typesetting industry. Lorem Ipsum
						</Text>
					</Stack>
				</SimpleGrid>
				<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
					<Stack
						border={"2px solid #eee"}
						boxShadow={"4px 3px 4px 1px #b8bcf5"}
						align={"center"}
						p={"1em"}
						justify={"center"}
						className={"service_bg img_feature"}
					>
						<Text fontSize={{ base: "sm", md: "xl" }} fontWeight={600}>
							Sector Experience
						</Text>

						<List spacing={3}>
							<UnorderedList>
								<ListItem>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit
								</ListItem>
								<ListItem>
									Assumenda, quia temporibus eveniet a libero incidunt suscipit
								</ListItem>
								<ListItem>
									Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
								</ListItem>
								{/* You can also use custom icons from react-icons */}
								<ListItem>
									Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
								</ListItem>
							</UnorderedList>
						</List>
					</Stack>
					<Stack
						border={"2px solid #eee"}
						boxShadow={"4px 3px 4px 1px #b8bcf5"}
						align={"center"}
						p={"1em"}
						justify={"center"}
						className={"service_bg img_feature"}
					>
						<Text fontSize={{ base: "sm", md: "xl" }} fontWeight={600}>
							Track Record Highlights
						</Text>

						<List spacing={3}>
							<UnorderedList>
								<ListItem>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit
								</ListItem>
								<ListItem>
									Assumenda, quia temporibus eveniet a libero incidunt suscipit
								</ListItem>
								<ListItem>
									Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
								</ListItem>
								{/* You can also use custom icons from react-icons */}
								<ListItem>
									Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
								</ListItem>
							</UnorderedList>
						</List>
					</Stack>
				</SimpleGrid>
			</Stack>
		</>
	);
}
