import { Button, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { convertPrice } from "../../util";

const RoundedCard = ({ data, isTab, isHome, icon }) => {
	const { id, imgSrc, heading, subheading, price, detail_id } = data;
	const navigate = useNavigate();
	const selectedCountry = localStorage.getItem("code");

	return (
		<VStack
			w={"100%"}
			rounded="lg"
			bg={"var(--default)"}
			borderRadius={"28px"}
			boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
			transition={"transform 0.3s box-shadow 0.3s"}
			_hover={{
				transform: "scale(1.01)",
				boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
			}}
			h={{ base: isHome && "26em" }}
			justifyContent={"space-between"}
		>
			{/* {isHome ? (
				<VStack
					justify={"space-around"}
					alignItems={"center"}
					height={{ base: "5em", lg: "8em" }}
					borderTopLeftRadius={"28px"}
					borderTopRightRadius={"28px"}
					borderBottomLeftRadius={{ md: "28px" }}
					borderBottomRightRadius={{ md: "28px" }}
					bg={"brand.200"}
					w={"100%"}
					color={"brand.100"}
				>
					<ResponsiveText align="center" text={heading} />
					<Icon color={"brand.100"} as={icon} w={10} h={10} />
				</VStack>
			) : ( */}
			<Image
				src={imgSrc}
				alt="Card Image"
				objectFit="fill"
				borderTopLeftRadius={"28px"}
				borderTopRightRadius={"28px"}
				mb="4"
				width="100%"
				height={"13em"}
				// boxShadow="0 4px 8px rgba(0, 0, 0, 0.25)"
				borderBottomLeftRadius={{ md: "40px" }}
				borderBottomRightRadius={{ md: "40px" }}
			/>
			{/* // )} */}

			{!isHome && (
				<Text fontSize="xl" fontWeight="semibold" mb="2">
					{heading}
				</Text>
			)}

			<Text
				fontSize="md"
				h={{ base: "auto", md: isTab ? "8em" : "6em" }}
				px={{ base: "1em", md: 2 }}
				textAlign={{ base: "justify", md: "left" }}
			>
				{subheading}
			</Text>
			{price && (
				<>
					<Text fontSize="md" mt={{ base: "2em", md: "3em" }}>
						Starting at
					</Text>
					<Text fontSize="xl" fontWeight="semibold">
						${`${convertPrice(price, selectedCountry)} `}/ Month
					</Text>
				</>
			)}
			<Button
				m={3}
				onClick={() =>
					navigate(
						price ? `/service-detail/${detail_id}/${id}` : `/services/${id}`,
					)
				}
				bg={"brand.300"}
				color={"brand.100"}
				fontWeight={"normal"}
				_hover={{ color: "brand.100" }}
				borderRadius={"28px"}
			>
				{price ? "Service Details" : "Discover more"}
			</Button>
		</VStack>
	);
};

export default RoundedCard;
