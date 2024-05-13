import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useBreakpointValue } from "../../services/common";

const AnimatedComponent = ({
	children,
	zoomIn,
	slideIn,
	rotate,
	slideLeft,
}) => {
	const { isMobile } = useBreakpointValue();
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});
	const fadeInAnimation = {
		initial: { opacity: 0.5 },
		animate: inView ? { opacity: 1 } : { opacity: 0.5 },
		transition: { duration: 0.5, ease: "easeInOut" },
	};
	const slideLeftAnimation = {
		initial: { opacity: 0, x: -100 },
		animate: inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 },
		transition: { duration: 0.5, ease: "easeInOut" },
	};
	const slideInLeftAnimation = {
		initial: { scale: 0.5, opacity: 0 },
		animate: inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 },
		transition: { duration: isMobile ? 0.5 : 2 },
	};
	const rotateLeftAnimation = {
		initial: { opacity: 0, scale: 0, rotate: -45 },
		animate: inView
			? { opacity: 1, scale: 1, rotate: 0 }
			: { opacity: 0, scale: 0, rotate: -45 },
		transition: { duration: 0.5, ease: "easeInOut" },
	};
	const zoomInAnimation = {
		initial: { opacity: 0.25, scale: 0.8 },
		animate: inView ? { opacity: 1, scale: 1 } : { opacity: 0.25, scale: 0.8 },
		transition: { duration: 0.5, ease: "easeInOut" },
	};

	return (
		<motion.div
			ref={ref}
			{...(zoomIn
				? zoomInAnimation
				: slideIn
				? slideInLeftAnimation
				: slideLeft
				? slideLeftAnimation
				: rotate
				? rotateLeftAnimation
				: fadeInAnimation)}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedComponent;
