"use client";

import {
	Flex,
	HStack,
	Image,
	List,
	ListIcon,
	ListItem,
	Stack,
} from "@chakra-ui/react";
import { MdCheckBox } from "react-icons/md";
import HighlightText from "../../components/HighlightText";
import ResponsiveText from "../../components/ResponsiveText";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { MORE_FEATURES } from "../../constant";

const FeatureItem = ({ py, src, altText, sub1, sub2, id, onClick }) => {
	return (
		<Flex py={py} flexDir={{ base: "column", md: "row" }}>
			<Flex flex={1}>
				<Image
					boxSize={{ base: "100%", md: "70%" }}
					alt={altText}
					mt={{ base: "0", md: "6em" }}
					ml={{ base: "0", md: "7em" }}
					objectFit={"cover"}
					src={src}
					borderRadius={"28px"}
				/>
			</Flex>
			<Flex p={8} pb={0} flex={1} align={"center"} justify={"center"}>
				<Stack
					spacing={6}
					w={"full"}
					maxW={"md"}
					ml={{ base: "0", lg: "-9em" }}
				>
					<HighlightText sub1={sub1} sub2={sub2} bottom={1} as={"span"} />

					<List spacing={3}>
						{MORE_FEATURES[id].map((item) => (
							<ListItem key={item}>
								<HStack align={"center"} justify={"flex-start"}>
									<ListIcon
										as={MdCheckBox}
										w={"2em"}
										h={"2em"}
										color="brand.300"
									/>
									<ResponsiveText text={item.item} bold={"bold"} />
								</HStack>
							</ListItem>
						))}
					</List>
					<Stack direction={{ base: "column", md: "row" }}>
						<PrimaryButton title="Get Started" onClick={onClick} />
					</Stack>
				</Stack>
			</Flex>
		</Flex>
	);
};

export default FeatureItem;
