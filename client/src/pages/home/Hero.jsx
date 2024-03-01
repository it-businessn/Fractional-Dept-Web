import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import homeCover from "../../assets/homeCover.mp4";
import "./Hero.css";

const Hero = () => {
	return (
		<Box position="relative">
			<video autoPlay muted loop className="cover-video">
				<source src={homeCover} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<Box
				color={"brand.100"}
				position="absolute"
				top={{ base: "4em", md: "9.25em", lg: "6em" }}
				left={{ base: 0, lg: "2em" }}
				width={{ base: "100vw", lg: "20%" }}
				height="80%"
				backgroundColor="rgba(0, 0, 0, 0.25)"
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				<VStack spacing={3}>
					<Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
						OUR SUPERSTAR
					</Heading>
					<Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
						TEAM MEMBERS
					</Heading>
					<Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
						WILL HELP YOU
					</Heading>
					<Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
						DRIVE GROWTH
					</Heading>
					<Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
						SUSTAINABLY
					</Heading>
					<VStack mt={5}>
						<Text fontSize="lg">No recruitment fees.</Text>
						<Text fontSize="lg"> Start Right Away.</Text>
						<Text fontSize="lg"> Cancel Anytime.</Text>
					</VStack>
				</VStack>
			</Box>
		</Box>
	);
};

export default Hero;
