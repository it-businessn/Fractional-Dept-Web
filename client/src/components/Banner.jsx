import {
	Flex,
	Stack,
	Text,
	VStack,
	useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect } from "react";
import banner from "../assets/images/banner/banner.jpg";

export default function Banner({ title, isServiceDetail = false }) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Flex
			mt={{ base: "0", md: "8em" }}
			position={"relative"}
			w={"full"}
			h={isServiceDetail ? "10vh" : "30vh"}
			backgroundImage={isServiceDetail ? "none" : banner}
			backgroundSize={"cover"}
			backgroundPosition={{ base: "unset", md: "center center" }}
		>
			<VStack
				w={"full"}
				justify={"center"}
				px={useBreakpointValue({ base: 4, md: 8 })}
				bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
			>
				<Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
					<Text
						color={"white"}
						fontWeight={700}
						lineHeight={1.2}
						fontSize={useBreakpointValue({
							base: "3xl",
							md: "4xl",
						})}
					>
						{title}
					</Text>
				</Stack>
			</VStack>
		</Flex>
	);
}
