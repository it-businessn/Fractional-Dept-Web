import { Button } from "@chakra-ui/react";
import React from "react";

const TertiaryButton = ({ title, padding }) => {
	return (
		<Button
			bg={"brand.300"}
			color={"brand.100"}
			_hover={{ color: "brand.100" }}
			p={"1em 2em"}
			textTransform="capitalize"
		>
			{title}
		</Button>
	);
};

export default TertiaryButton;
