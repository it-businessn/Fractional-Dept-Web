import { HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const Section = ({ title, text }) => {
	return (
		<Stack>
			<Heading
				color={"brand.200"}
				fontSize={{ base: "3xl", md: "4xl" }}
				textAlign={{
					base: "center",
					md: "center",
					lg: "start",
				}}
			>
				{title}
			</Heading>
			<HStack align={"flex-start"}>
				<Icon as={MdCheckCircle} color="brand.200" />
				<Text
					fontSize={{ base: "md", md: "xl" }}
					textAlign={{ base: "justify", md: "start" }}
				>
					{text}
				</Text>
			</HStack>
		</Stack>
	);
};

export default Section;
