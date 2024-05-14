import {
	Heading,
	List,
	ListIcon,
	ListItem,
	Stack,
	Text,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const Statement = ({ statement }) => {
	const { heading, list, content } = statement;
	return (
		<Stack>
			<Heading
				color={"brand.200"}
				fontSize={{ base: "3xl", md: "4xl" }}
				textAlign={{ base: "center", md: "start" }}
			>
				{heading}
			</Heading>
			{content}
			{list && (
				<List spacing={3}>
					{list?.map(({ statement }) => (
						<ListItem>
							<Text
								fontSize={{ base: "md", lg: "lg" }}
								textAlign={{ base: "justify", md: "start" }}
							>
								<ListIcon
									as={MdCheckCircle}
									color="brand.200"
									d="inline-flex"
									verticalAlign={"middle"}
								/>
								{statement}
							</Text>
						</ListItem>
					))}
				</List>
			)}
		</Stack>
	);
};

export default Statement;
