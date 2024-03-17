import React from "react";
import Image from "next/image";

export const Logo = () => {
	return (
		<div className="relative flex">
			<Image src="/assets/images/brand_logo.png" width={80} height={72} alt="logo picture" />
		</div>
	);
};
