"use client";

import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import aboutCoverUrl from "../../assets/images/about/home-7.jpg";
import AnimatedComponent from "../home/AnimatedComponent";
import MissionValues from "./MissionValues";

export default function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			{/* <Banner title={"Our Company"} /> */}
			<AnimatedComponent zoomIn>
				<Stack
					minH={"50vh"}
					m={{ md: "0 2em", lg: "2em auto" }}
					pt={{ md: "3em" }}
					maxW={"1180px"}
					direction={{ base: "column", md: "row" }}
				>
					<Flex flex={1} align={"center"} justify={"center"}>
						<Stack spacing={6} w={"full"} px={"1em"} pt={"1em"}>
							<Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
								Over 100 years of
								<Text
									position={"relative"}
									_after={{
										content: "''",
										width: "60%",
										height: "20%",
										position: "absolute",
										top: "1.1em",
										left: 0,
										bg: "linear-gradient(90deg, rgba(13,234,251,1) 0%, rgba(40,161,242,1) 25%, rgba(51,130,240,1) 50%, rgba(81,45,230,1) 100%)",
									}}
								>
									combined experience
								</Text>
							</Heading>
							<Text fontSize={{ base: "sm", md: "xl" }}>
								Founded by a group of professionals that saw a need to to
								deliver professional standards to companies of all sizes. We
								have a passion to give organizations resources to compete in an
								ever more complex business environment.
							</Text>
							<Text fontSize={{ base: "sm", md: "xl" }}>
								Our solutions were developed to help organizations of all sizes
								to be better run, more efficient and much more profitable.
							</Text>
							<Stack direction={{ base: "column", md: "row" }} spacing={4}>
								<Link to="/contact" name="my-link">
									<Button
										fontSize={"xs"}
										display={{
											base: "flex",
											md: "inline-flex",
										}}
										bg={"brand.200"}
										color={"brand.300"}
										textTransform="uppercase"
										p={"1em"}
									>
										OUR TEAM
									</Button>
								</Link>
							</Stack>
						</Stack>
					</Flex>
					<Flex
						flex={1}
						pr={{ base: 0, md: "2em" }}
						pt={{ base: 0, md: "3em" }}
					>
						<Image
							alt={"Login Image"}
							objectFit={"cover"}
							borderRadius={"28px"}
							src={aboutCoverUrl}
						/>
					</Flex>
				</Stack>
				<MissionValues />
			</AnimatedComponent>
		</>
	);
}
