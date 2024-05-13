"use client";

import { Flex, Image, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import aboutCoverUrl from "../../assets/images/about/home-7.jpg";
import HighlightText from "../../components/HighlightText";
import ResponsiveText from "../../components/ResponsiveText";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useBreakpointValue } from "../../services/common";
import AnimatedComponent from "../home/AnimatedComponent";
import MissionValues from "./MissionValues";

export default function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const { isMobile } = useBreakpointValue();
	const showContent = () => (
		<>
			<Stack
				minH={"50vh"}
				m={{ md: "0 2em", lg: "2em auto" }}
				pt={{ md: "3em" }}
				maxW={"1450px"}
				direction={{ base: "column", md: "row" }}
			>
				<Flex flex={1} align={"center"} justify={"center"}>
					<Stack spacing={6} w={"full"} px={"1em"} pt={"1em"}>
						<HighlightText
							sub1={"Over 100 years of"}
							sub2={"combined experience"}
							width="60%"
							top="1.1em"
						/>
						<ResponsiveText
							text={
								"Our founders recognized a need for affordable implementation of best practices in key roles. We aim to be the trusted source for fractional roles."
							}
						/>
						<ResponsiveText
							text={
								"Our mission is to empower small businesses with top-notch admin at affordable prices, fostering growth and teamwork. Join us on this exciting journey!"
							}
						/>

						<Stack direction={{ base: "column", md: "row" }} spacing={4}>
							<Link to="/contact" name="my-link">
								<PrimaryButton title={"Our team"} />
							</Link>
						</Stack>
					</Stack>
				</Flex>
				<Flex flex={1} pr={{ base: 0, md: "2em" }} pt={{ base: 0, md: "3em" }}>
					<Image
						alt={"Login Image"}
						objectFit={"cover"}
						borderRadius={"28px"}
						src={aboutCoverUrl}
					/>
				</Flex>
			</Stack>
			<MissionValues />
		</>
	);
	return isMobile ? (
		showContent()
	) : (
		<AnimatedComponent zoomIn>{showContent()}</AnimatedComponent>
	);
}
