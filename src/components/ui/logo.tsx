import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
	return (
		<div className="relative flex px-[2px] ">
			<Link href="/">
				<Image src="/assets/images/brand_logo.png" width={50} height={46} alt="logo picture" />
			</Link>
		</div>
	);
};
