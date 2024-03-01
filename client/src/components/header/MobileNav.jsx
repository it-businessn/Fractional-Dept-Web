import { Stack } from "@chakra-ui/react";
import { NAV_ITEMS } from "../../constant";
import MobileNavItem from "./MobileNavItem";

export default function MobileNav({ onToggle }) {
	return (
		<Stack p={4} pt={0} display={{ md: "none" }}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem onToggle={onToggle} key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
}
