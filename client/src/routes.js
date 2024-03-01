import { createBrowserRouter } from "react-router-dom";
import Root from "./components";
import About from "./pages/about";
import Careers from "./pages/careers";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Services from "./pages/services";
import ServiceDetail from "./pages/services/ServiceDetail";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "services/:id",
				element: <Services />,
			},
			{
				path: "service-detail/:detail_id/:id",
				element: <ServiceDetail />,
			},
			{
				path: "careers",
				element: <Careers />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
		],
	},
]);
