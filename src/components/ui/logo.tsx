import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ isDesktop }: { isDesktop?: boolean }) => {
	return (
		<div className="relative flex px-1 md:px-0">
			<Link href="/">
				<Image
					src="/assets/images/brand_logo.png"
					width={isDesktop ? 80 : 50}
					height={isDesktop ? 72 : 46}
					alt="logo picture"
				/>
			</Link>
		</div>
	);
};
