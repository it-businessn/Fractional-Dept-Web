import { Flex, HStack, Image, Stack } from "@chakra-ui/react";
import React from "react";
import homeCoverImg from "../../assets/homeCoverImg.png";
import ResponsiveText from "../../components/ResponsiveText";
import TextAnimation from "../../components/TextAnimation";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import TertiaryButton from "../../components/buttons/TertiaryButton";
import "./Hero.css";

const Hero = () => {
	return (
		<Stack
			m={{ base: "0 2em", md: "2em auto" }}
			maxW={"1250px"}
			direction={{ base: "column", md: "row" }}
		>
			<Flex flex={1} align={"center"} justify={"center"}>
				<Stack spacing={6} w={{ base: "90%", md: "70%" }} px={"1em"} pt={"1em"}>
					<TextAnimation />

					<ResponsiveText
						text={
							"Our fractional services help you reach your goals- whether that’s more time to spend with family or grow profits. We partner with you to bring best practices to your organization"
						}
					/>

					<HStack>
						<PrimaryButton title="Learn more" />
						<TertiaryButton title="See work" />
					</HStack>
				</Stack>
			</Flex>
			<Flex flex={1} pr={{ base: 0, md: "2em" }} pt={{ base: 0, md: "3em" }}>
				<Image
					alt={"Login Image"}
					objectFit={"cover"}
					borderRadius={"28px"}
					src={homeCoverImg}
				/>
			</Flex>
		</Stack>
	);
};

export default Hero;
