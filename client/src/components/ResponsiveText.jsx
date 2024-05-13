import { Text } from "@chakra-ui/react";
import React from "react";

const ResponsiveText = ({ text, bold }) => {
	return (
		<Text fontSize={{ base: "md", md: "xl" }} fontWeight={bold}>
			{text}
		</Text>
	);
};

export default ResponsiveText;
