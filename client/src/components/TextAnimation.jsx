import { Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const TextAnimation = () => {
	const text = "Write your own script";
	const myStyles = {
		fontFamily: "'Caveat', cursive",
		fontOpticalSizing: "auto",
		fontWeight: 800,
		fontStyle: "italic",
	};
	return (
		<Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} style={myStyles}>
			{[...text].map((char, index) => (
				<motion.span
					key={index}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: index * 0.1 }}
				>
					{char}
				</motion.span>
			))}
		</Heading>
	);
};

export default TextAnimation;
