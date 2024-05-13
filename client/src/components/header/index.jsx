import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
	Box,
	Collapse,
	Flex,
	IconButton,
	Image,
	Spacer,
	useBreakpointValue,
	useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Link, useLocation } from "react-router-dom";
import blue_logo from "../../assets/logo_blue.png";
import logo from "../../assets/logo_white.png";
import { COMPANY_BIO } from "../../constant";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
	const { isOpen, onToggle } = useDisclosure();

	const [isScrolled, setIsScrolled] = useState(false);

	const [select, setSelect] = useState("CA");
	const onSelect = (code) => setSelect(code);

	const { isMobile } = useBreakpointValue({ base: true, sm: false });
	const isIpad = useBreakpointValue({ md: true, lg: false });

	const location = useLocation();
	let scrollHeight = 20;

	const [scrollPercentage, setScrollPercentage] = useState(0);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	useEffect(() => {
		localStorage.setItem("code", select);
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const maxScroll =
				document.documentElement.scrollHeight - window.innerHeight;
			const percentage = (scrollTop / maxScroll) * 100;
			setScrollPercentage(percentage);
		};
		if (location.pathname === "/") {
			scrollHeight = isMobile ? 20 : isIpad ? 100 : 300;
		}
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [select, location.pathname]);
	return (
		<Box
			minW={"100vw"}
			bg={"var(--bg)"}
			transition="background 0.1s ease-in-out"
		>
			<link rel="preload" href={blue_logo} as="image" />
			<Flex
				minH={"70px"}
				bg={`linear-gradient(to right, rgba(242, 242, 242) ${scrollPercentage}%, rgba(255, 255, 255, 0.5) ${scrollPercentage}%)`}
				transition="background 0.1s ease-in-out"
				minW={"100vw"}
				px={{ base: 4, lg: "2em" }}
				zIndex={2}
				position={{ base: "relative", md: "fixed" }}
				align={"center"}
			>
				<Flex
					flex={{ base: 1, md: "auto" }}
					ml={{ base: -2 }}
					display={{ base: "flex", md: "none" }}
				>
					<IconButton
						sx={{
							color: "brand.300",
						}}
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant={"ghost"}
						aria-label={"Toggle Navigation"}
					/>
				</Flex>
				<Flex
					flex={{ base: 1 }}
					h="60px"
					justify={{ base: "start", md: "center" }}
					align={{ base: "start", md: "center" }}
				>
					<Link
						to="/"
						name="my-link"
						style={
							isMobile
								? {
										display: "inline-flex",
										width: "auto",
										height: "auto",
								  }
								: {}
						}
					>
						<Image
							boxSize={{
								base: "150px",
								lg: "250px",
							}}
							left={{ base: "-4em", md: "-1em", lg: "-2em" }}
							objectFit="cover"
							src={isScrolled ? logo : blue_logo}
							position={"relative"}
							alt="brand_logo"
							bottom={{ base: "40px", md: "auto" }}
						/>
					</Link>
					<Spacer />
					<Flex display={{ base: "none", md: "flex" }}>
						<DesktopNav isScrolled={isScrolled} />
					</Flex>
					<Spacer />
					<Flex
						gap={{ md: "0.25em", lg: "0.5em" }}
						display={{ base: "none", md: "flex" }}
					>
						<Link to="/contact" name="my-link">
							<PrimaryButton title="Book an Appointment" padding={"1em"} />
						</Link>
						<SecondaryButton title={COMPANY_BIO.PHONE} />
						<ReactFlagsSelect
							className="country_select"
							selected={select}
							onSelect={onSelect}
							countries={["CA", "US"]}
						/>
					</Flex>
				</Flex>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav onToggle={onToggle} />
			</Collapse>
		</Box>
	);
}
