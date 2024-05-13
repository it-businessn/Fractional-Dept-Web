import {
	Flex,
	HStack,
	Heading,
	Image,
	SimpleGrid,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SERVICE_IT, SERVICE_TABS } from "../../constant";
import RoundedCard from "../home/RoundedCard";

export default function Services() {
	const navigate = useNavigate();
	const { id } = useParams();
	const isMobile = window.innerWidth <= 768;
	const tabIndex = SERVICE_TABS.findIndex((item) => item.id === id);
	const [startIndex, setStartIndex] = useState(0);

	const viewportWidth = window.innerWidth;
	const columnWidth = 280;
	const numberOfColumns = Math.floor(viewportWidth / columnWidth);

	const handleScroll = (direction, subItems) => {
		const newIndex =
			direction === "left"
				? startIndex - numberOfColumns
				: startIndex + numberOfColumns;
		setStartIndex(
			Math.max(0, Math.min(subItems.length - numberOfColumns, newIndex)),
		);
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const showHeader = (tab) => (
		<>
			<Heading
				fontSize={{
					base: "3xl",
					md: "4xl",
					lg: "5xl",
				}}
				fontStyle="italic"
			>
				{tab.id}
			</Heading>
			<Text
				fontSize={{
					base: "2xl",
					md: "3xl",
				}}
			>
				{tab.heading}
			</Text>
			<Text
				fontSize={{
					base: "xl",
				}}
			>
				{tab.subheading}
			</Text>
		</>
	);

	return (
		<>
			{/* <Banner title={"What We Offer"} /> */}
			<Flex
				flex={1}
				align={"center"}
				justify={"center"}
				pt={{ md: "5em" }}
				flexDir="column"
			>
				<Stack spacing={6} maxW={{ lg: "1180px" }} borderRadius={32}>
					<Stack
						m={"1em auto"}
						align="center"
						w={{ base: "95%", md: "80%", lg: "full" }}
					>
						<Heading
							textAlign="center"
							px={{ base: "auto", md: "auto" }}
							fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
						>
							You do not need deep pockets to have a deep bench
						</Heading>
						<br />
						<Text textAlign="center" fontSize={{ base: "md", md: "xl" }}>
							We’re here to help with your administration at a price point that
							is right for your business now and as you grow. Feel all the
							support without any unnecessary overhead.
						</Text>
						<br />
						<Tabs variant="soft-rounded" defaultIndex={tabIndex}>
							<TabList
								className="tab_list"
								w={{ base: "100%", lg: "95%" }}
								margin={{ base: "auto", md: "0 auto" }}
								justifyContent="space-between"
								bg="brand.600"
								borderRadius="28px"
							>
								{SERVICE_TABS.map((tab) => (
									<Tab
										p={{ base: "8px", md: "auto" }}
										minW={{ base: "58px", md: "200px" }}
										_selected={{
											fontWeight: "bolder",
											color: "brand.100",
											bg: "brand.300",
										}}
										key={tab.id}
										onClick={() => navigate(`/services/${tab.id}`)}
									>
										<Text fontSize={{ base: "md", md: "2xl" }}>
											{isMobile && tab.id === SERVICE_IT.IT_FULL
												? SERVICE_IT.IT
												: tab.id}
										</Text>
									</Tab>
								))}
							</TabList>

							<TabPanels>
								{SERVICE_TABS.map((tab) => (
									<TabPanel key={`${tab.id}_tabIndex`}>
										{isMobile ? (
											<VStack p={0} align="flex-start">
												<Image
													w="99%"
													right={0}
													alt={"Login Image"}
													borderRadius={"50% 0 0 50%"}
													src={tab.imgSrc}
												/>
												{showHeader(tab)}
											</VStack>
										) : (
											<HStack p={"1em"}>
												<Stack flex={1} spacing={6}>
													{showHeader(tab)}
												</Stack>
												<Image
													flex={0.7}
													h={"20em"}
													right={0}
													alt={"Login Image"}
													borderRadius={"50% 0 0 50%"}
													src={tab.imgSrc}
												/>
											</HStack>
										)}
										<Flex>
											<SimpleGrid
												columns={{ base: 1, md: 2, lg: 3 }}
												spacing={"2.5em"}
											>
												{tab.content.map((item) => (
													<RoundedCard key={`tab-${item.id}`} data={item} />
												))}
											</SimpleGrid>
										</Flex>
									</TabPanel>
								))}
							</TabPanels>
						</Tabs>
					</Stack>
				</Stack>
			</Flex>
		</>
	);
}
