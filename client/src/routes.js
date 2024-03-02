import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from "./components";
import Loader from "./components/Loader";

const About = lazy(() => import("./pages/about"));
const Careers = lazy(() => import("./pages/careers"));
const Contact = lazy(() => import("./pages/contact"));
const Home = lazy(() => import("./pages/home"));
const ServiceDetail = lazy(() => import("./pages/services/ServiceDetail"));
const Services = lazy(() => import("./pages/services"));

export const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Suspense fallback={<Loader />}>
				<Root />
			</Suspense>
		),
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
