import Image from "next/image";
import Banner from "/public/rising-sun-banner.svg";

export default function (props) {
	return (
		<div className="relative w-full min-h-screen top-0 left-0 z-10 bg-gray-50 flex justify-around">
			<Image
				className="aspect-square rounded-xl object-contain"
				src={Banner}
				alt="Banner for 100 days of code"
			/>
			<div className="absolute w-full h-1/3 backdrop-blur-xl bottom-0" />
			<div className="absolute w-full h-1/3 backdrop-blur-xl top-0" />
		</div>
	);
}
