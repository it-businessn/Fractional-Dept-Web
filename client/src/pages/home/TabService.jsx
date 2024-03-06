import { Flex, SimpleGrid } from "@chakra-ui/react";
import { TABS } from "../../constant";
import RoundedCard from "./RoundedCard";

export default function TabService() {
	return (
		<Flex m={"2em 1px"}>
			<SimpleGrid
				columns={{ base: 1, md: 2, lg: 3 }}
				spacing={"2.5em"}
				mx={{ lg: "12em" }}
			>
				{TABS.map((item) => (
					<RoundedCard isTab key={`service-${item.id}`} data={item} />
				))}
			</SimpleGrid>
		</Flex>
	);
}
