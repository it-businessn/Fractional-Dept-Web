import { ArrowBackIcon } from "@chakra-ui/icons";
import {
	Button,
	Flex,
	HStack,
	Heading,
	IconButton,
	Image,
	List,
	ListIcon,
	ListItem,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdCheckBox } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import ResponsiveText from "../../components/ResponsiveText";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { SERVICE_TABS } from "../../constant";
import { convertPrice } from "../../util";

export default function ServiceDetail() {
	const selectedCountry = localStorage.getItem("code");
	const { detail_id, id } = useParams();
	const isMobile = window.innerWidth <= 768;
	const navigate = useNavigate();
	const [service, setService] = useState("");
	const currentService = SERVICE_TABS.find((service) =>
		service.content.find((detail) => detail.id === id),
	);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	useEffect(() => {
		if (currentService)
			setService((prev) => currentService.content.find((tab) => tab.id === id));
	}, [currentService]);

	const showPrevTab = (tab) => (
		<HStack spacing={0} onClick={() => navigate(`/services/${detail_id}`)}>
			<IconButton
				sx={{
					color: "brand.300",
				}}
				icon={<ArrowBackIcon w={"30px"} h={"30px"} />}
				aria-label={"Toggle Navigation"}
			/>
			<Button cursor="pointer" variant="ghost">
				{tab.detail_id}
			</Button>
		</HStack>
	);
	const showHeader = (tab) => (
		<>
			<Heading
				padding={"5"}
				fontSize={{
					base: "3xl",
					md: "4xl",
					lg: "5xl",
				}}
			>
				{tab.id}
			</Heading>

			<ResponsiveText px={"5"} text={tab.details} />
			<Heading
				fontSize={{
					base: "2xl",
					md: "3xl",
					lg: "4xl",
				}}
				px={"5"}
			>
				Features
			</Heading>
			<List spacing={3} px={"5"}>
				{tab?.features?.map((item) => (
					<ListItem key={item}>
						<HStack alignItems={"start"} justify={"flex-start"}>
							<ListIcon
								as={MdCheckBox}
								w={"1.5em"}
								h={"1.5em"}
								color="brand.200"
							/>
							<ResponsiveText text={item.feature} />
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
	const showPurchaseButton = () => (
		<Flex
			flex={1}
			py={isMobile && 2}
			justify="space-evenly"
			position={isMobile && "sticky"}
			bottom={isMobile && "0"}
			bg={isMobile && "var(--bg)"}
			color={"var(--primary)"}
			w={"100%"}
		>
			<HStack justify={"space-evenly"} w={"100%"}>
				<Text
					fontSize={{
						base: "2xl",
					}}
				>
					{/* {service.id} */}
				</Text>
				<VStack spacing={0}>
					<Text fontSize="md">Starting at</Text>
					<Text
						fontSize={{
							base: "2xl",
						}}
					>
						${`${convertPrice(service.price, selectedCountry)} `}/ Month
					</Text>
				</VStack>
				<PrimaryButton title={"Buy Now"} />
			</HStack>
		</Flex>
	);
	return (
		<>
			{/* <Banner isServiceDetail title={"What We Offer"} /> */}
			<Flex
				flex={1}
				align={"center"}
				mt={{ base: 0, md: "3em" }}
				mb={{ base: 0, xl: "1em" }}
				justify={"center"}
				flexDir="column"
			>
				{!service && <Loader />}
				{service && (
					<Stack spacing={6} w={"100%"} borderRadius={32}>
						<Stack mt={"3em"} align="center">
							{isMobile ? (
								<VStack p={0} align="flex-start">
									{showPrevTab(service)}
									<Image
										w="99%"
										right={0}
										alt={"Login Image"}
										borderRadius={"50% 0 0 50%"}
										src={service.imgSrc}
									/>
									{showHeader(service)}
								</VStack>
							) : (
								<HStack
									p={"0"}
									maxW={{ base: "", md: "", lg: "1180px" }}
									alignItems={"end"}
								>
									<Stack flex={1} spacing={6}>
										{showPrevTab(service)}

										{showHeader(service)}
									</Stack>
									<VStack>
										<Image
											flex={0.7}
											h={"20em"}
											right={0}
											alt={"Login Image"}
											borderRadius={"50% 0 0 50%"}
											src={service.imgSrc}
										/>

										{showPurchaseButton()}
									</VStack>
								</HStack>
							)}
							{isMobile && showPurchaseButton()}
						</Stack>
					</Stack>
				)}
			</Flex>
		</>
	);
}
