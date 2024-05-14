import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
	Box,
	Collapse,
	Flex,
	HStack,
	IconButton,
	Image,
	Spacer,
	VStack,
	useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/fg.png";
import { COMPANY_BIO } from "../../constant";
import { useBreakpointValue } from "../../services/common";
import ResponsiveText from "../ResponsiveText";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
	const { isOpen, onToggle } = useDisclosure();

	const [isScrolled, setIsScrolled] = useState(false);

	const [select, setSelect] = useState("CA");
	const onSelect = (code) => setSelect(code);

	const { isMobile } = useBreakpointValue();
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

	const showTabs = () => (
		<>
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
		</>
	);
	return (
		<Box
			minW={"100vw"}
			bg={"var(--bg)"}
			transition="background 0.1s ease-in-out"
		>
			<link rel="preload" href={logo} as="image" />
			<Flex
				minH={"70px"}
				bg={
					isMobile
						? "var(--bg)"
						: `linear-gradient(to right, rgba(242, 242, 242) ${scrollPercentage}%, rgba(255, 255, 255, 0.5) ${scrollPercentage}%)`
				}
				transition="background 0.1s ease-in-out"
				minW={"100vw"}
				px={{ base: 4, lg: "2em" }}
				zIndex={2}
				position={{ base: "relative", md: "fixed" }}
				align={"center"}
				flex={{ base: 0.5, md: 1 }}
				h="60px"
			>
				{isMobile ? (
					<HStack justify={"space-between"} w={"100%"}>
						<Link to="/" name="my-link">
							<Image
								boxSize={{
									base: "3em",
								}}
								objectFit="cover"
								src={logo}
								position={"relative"}
								alt="brand_logo"
								bottom={{ md: "auto" }}
							/>
						</Link>
						<Link to="/" name="my-link">
							<IconButton
								sx={{
									color: "brand.300",
								}}
								onClick={onToggle}
								icon={
									isOpen ? (
										<CloseIcon w={3} h={3} />
									) : (
										<HamburgerIcon w={5} h={5} />
									)
								}
								variant={"ghost"}
								aria-label={"Toggle Navigation"}
							/>
						</Link>
					</HStack>
				) : (
					<>
						<Link to="/" name="my-link">
							<HStack justify={"space-between"}>
								<Image
									boxSize={{
										base: "3em",
									}}
									objectFit="cover"
									src={logo}
									position={"relative"}
									alt="brand_logo"
									bottom={{ md: "auto" }}
								/>
								<VStack alignItems={"self-start"} spacing={0}>
									<ResponsiveText
										text="Fractional"
										color={"#3f51b5d9"}
										bold={"bold"}
									/>
									<ResponsiveText text="Departments" color={"#3f51b5d9"} />
								</VStack>
							</HStack>
						</Link>
						{showTabs()}
					</>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav onToggle={onToggle} />
			</Collapse>
		</Box>
	);
}
