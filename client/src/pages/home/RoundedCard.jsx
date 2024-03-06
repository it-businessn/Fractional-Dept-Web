import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { convertPrice } from "../../util";

const RoundedCard = ({ data, isTab }) => {
	const { id, imgSrc, heading, subheading, price, detail_id } = data;
	const navigate = useNavigate();
	const selectedCountry = localStorage.getItem("code");

	return (
		<Box
			rounded="lg"
			borderRadius={"28px"}
			boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
			bg="brand.700"
			mb={"1em"}
			transition={"transform 0.3s box-shadow 0.3s"}
			_hover={{
				transform: "scale(1.01)",
				boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
			}}
		>
			<Image
				src={imgSrc}
				alt="Card Image"
				objectFit="fill"
				borderTopLeftRadius={"28px"}
				borderTopRightRadius={"28px"}
				mb="4"
				width="100%"
				height="15em"
			/>

			<Box p="4">
				<Text fontSize="xl" fontWeight="semibold" mb="2">
					{heading}
				</Text>
				<Text
					fontSize="md"
					height={{ base: "auto", md: isTab ? "11em" : "6em" }}
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
					onClick={() =>
						navigate(
							price ? `/service-detail/${detail_id}/${id}` : `/services/${id}`,
						)
					}
					mt="1em"
					bg={"brand.300"}
					color={"brand.100"}
					borderRadius={"28px"}
				>
					{price ? "Service Details" : "Discover more"}
				</Button>
			</Box>
		</Box>
	);
};

export default RoundedCard;
