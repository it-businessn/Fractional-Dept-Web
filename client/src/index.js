import { ChakraBaseProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./config.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ChakraBaseProvider theme={theme}>
			<App />
		</ChakraBaseProvider>
	</React.StrictMode>,
);
