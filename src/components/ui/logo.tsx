import React from "react";
import Image from "next/image";

export const Logo = () => {
	return (
		<div className="relative flex p-2">
			<span className="absolute bottom-0 left-0 z-[-1] block h-[200%] w-full rounded-b-[40px] bg-accent"></span>
			<Image src="/assets/images/brand_logo.png" width={80} height={72} alt="logo picture" />
		</div>
	);
};
