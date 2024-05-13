import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	colors: {
		brand: {
			100: "var(--default)",
			200: "var(--primary)",
			300: "var(--secondary)",
			500: "var(--active)",
			600: "var(--white_600)",
			700: "var(--white_700)",
		},
	},
	fonts: {
		heading: `'Material', sans-serif`,
		body: `'Material', sans-serif`,
	},
});

export const EMAILJS_CONFIG = {
	SERVICE_ID: "service_ytct8n2",
	TEMPLATE_ID: "template_7yxltvm",
	KEY: "f2Z55x8OF7tzHjaEG",
};
