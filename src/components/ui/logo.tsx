import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
	return (
		<div className="relative flex">
			<Link href="/">
				<Image src="/assets/images/brand_logo.png" width={80} height={72} alt="logo picture" />
			</Link>
		</div>
	);
};
