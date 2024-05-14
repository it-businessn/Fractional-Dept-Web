import { Text } from "@chakra-ui/react";
import React from "react";

const ResponsiveText = ({ text, bold, px, align }) => {
	return (
		<Text
			fontSize={{ base: "md", md: "xl" }}
			px={px}
			fontWeight={bold}
			textAlign={align}
		>
			{text}
		</Text>
	);
};

export default ResponsiveText;
