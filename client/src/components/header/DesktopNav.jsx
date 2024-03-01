import { Box, Popover, PopoverTrigger, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../constant";

export default function DesktopNav({ isScrolled }) {
	return (
		<Stack direction={"row"} spacing={{ md: "0.5rem", lg: "3rem" }}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={"hover"} placement={"bottom-start"}>
						<PopoverTrigger>
							<NavLink to={navItem.href ?? "#"}>
								<Box
									color={isScrolled ? "brand.100" : "brand.300"}
									fontSize={{ md: "sm", lg: "lg" }}
									textTransform="uppercase"
									_hover={{
										textDecoration: "none",
										color: "brand.300",
									}}
									_focus={{
										color: "brand.300",
										fontWeight: "bold",
									}}
									_active={{
										color: "brand.300",
										fontWeight: "bold",
									}}
								>
									{navItem.label}
								</Box>
							</NavLink>
						</PopoverTrigger>
					</Popover>
				</Box>
			))}
		</Stack>
	);
}
