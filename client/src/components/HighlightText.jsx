import { Heading, Text } from "@chakra-ui/react";
import React from "react";

const HighlightText = ({ sub1, sub2, width = "full", top, bottom, as }) => {
	return (
		<Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
			{sub1}&nbsp;
			<Text
				as={as}
				position={"relative"}
				_after={{
					content: "''",
					width,
					height: "20%",
					position: "absolute",
					top,
					bottom,
					left: 0,
					bg: "var(--highlight)",
				}}
			>
				{sub2}
			</Text>
		</Heading>
	);
};

export default HighlightText;
