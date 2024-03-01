import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#ffffff",
      200: "#0deafb",
      300: "#010b2f",
      500: "#5a13e3",
      600: "#f1f5f8",
      700: "#e8e9eb",
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
