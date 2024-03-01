import AnimatedComponent from "./AnimatedComponent";
import Hero from "./Hero";
import WhoWeAre from "./HomeMain";
import MoreFeatures from "./MoreFeatures";
import TabService from "./TabService";

export default function Home() {
	return (
		<>
			<AnimatedComponent zoomIn>
				<Hero />
			</AnimatedComponent>
			<AnimatedComponent slideIn>
				<WhoWeAre />
			</AnimatedComponent>
			<TabService />
			<AnimatedComponent zoomIn>
				<MoreFeatures />
			</AnimatedComponent>
		</>
	);
}
