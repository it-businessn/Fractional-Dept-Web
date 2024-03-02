import { Box, Container, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_white.png";

export default function Footer() {
	return (
		<Box
			position={"relative"}
			w={"full"}
			minW={"100vw"}
			display={"flex"}
			justify={"center"}
			align={"center"}
			bg={"brand.300"}
		>
			<Container
				as={Stack}
				maxW={"6xl"}
				spacing={4}
				justify={"center"}
				align={"center"}
			>
				<Link onClick={() => window.scrollTo(0)} name="my-link">
					<Image
						src={logo}
						alt="brand_logo"
						my={"-2em"}
						w={"auto"}
						height={"170px"}
					/>
				</Link>
				<Text sx={{ color: "brand.100" }} pb={"1em"} mt={"-1em"}>
					© 2023 Fractional Departments | All rights reserved
				</Text>
			</Container>
		</Box>
	);
}
