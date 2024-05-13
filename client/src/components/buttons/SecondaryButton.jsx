import { Button } from "@chakra-ui/react";
import React from "react";

const SecondaryButton = ({ title, padding }) => {
	return (
		<Button
			as={"a"}
			className="partner_btn"
			href="tel:+1-844-777-8231"
			display={{ base: "flex", md: "inline-flex" }}
			fontSize={"sm"}
			p={"1em 2em"}
			bg={"#eee"}
			_hover={{
				color: "brand.200",
			}}
		>
			{title}
		</Button>
	);
};

export default SecondaryButton;
