import { Button } from "@chakra-ui/react";
import React from "react";

const PrimaryButton = ({
	isDisabled,
	isLoading,
	loadingText,
	onClick,
	padding,
	title,
	type,
}) => {
	return (
		<Button
			display={{ base: "flex", md: "inline-flex" }}
			bg={"brand.200"}
			color={"brand.100"}
			p={padding || "1em 2em"}
			variant={"primary"}
			textTransform="capitalize"
			onClick={onClick}
			isDisabled={isDisabled}
			type={type}
			mt={loadingText && 2}
			isLoading={isLoading}
			loadingText={loadingText}
		>
			{title}
		</Button>
	);
};

export default PrimaryButton;
