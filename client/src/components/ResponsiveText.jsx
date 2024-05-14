import { Text } from "@chakra-ui/react";
import React from "react";

const ResponsiveText = ({ text, bold, px, align, color }) => {
	return (
		<Text
			fontSize={{ base: "md", md: "xl" }}
			px={px}
			fontWeight={bold}
			textAlign={align}
			color={color}
		>
			{text}
		</Text>
	);
};

export default ResponsiveText;
