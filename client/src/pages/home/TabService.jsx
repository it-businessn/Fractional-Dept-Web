import { Flex, SimpleGrid } from "@chakra-ui/react";
import { TABS } from "../../constant";
import RoundedCard from "./RoundedCard";

export default function TabService() {
	return (
		<Flex m={"2em 1px"}>
			<SimpleGrid
				columns={{ base: 1, md: 3, lg: 6 }}
				spacing={"2em"}
				maxWidth={"1400px"}
				m={"0 auto"}
			>
				{TABS.map((item) => (
					<RoundedCard
						isHome
						isTab
						key={`service-${item.id}`}
						data={item}
						icon={item.icon}
					/>
				))}
			</SimpleGrid>
		</Flex>
	);
}
