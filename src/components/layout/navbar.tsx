"use client";

import React from "react";
import { motion } from "framer-motion";
import { DesktopMenu } from "@/components/ui/desktop-menu";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { usePageScrolled } from "@/hooks/usePageScrolled";
import { useMediaQuery } from "@/hooks/use-media-query";
import { MobileMenu } from "@/components/ui/mobile-menu";
import { cn } from "@/lib/utils";

export const Navbar = () => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
	const isScrolled = usePageScrolled();

	// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
	const isDesktop: boolean | undefined = useMediaQuery("(min-width: 768px)");
	if (isDesktop === undefined) {
		return null;
	}

	return (
		<nav className="w-100vw sticky top-0 z-[50] mx-auto flex-wrap items-center justify-between p-2 font-sans font-bold uppercase text-primary md:flex md:w-full md:max-w-6xl">
			<motion.span
				initial={{
					width: isScrolled ? "100%" : isDesktop ? "60px" : "60px",
					borderRadius: isScrolled ? "0 0 25px 25px" : 0,
					left: isScrolled ? 0 : "5px",
				}}
				animate={{
					width: isScrolled ? "100%" : isDesktop ? "60px" : "60px",
					borderRadius: isScrolled
						? isDesktop
							? "0 0 25px 25px"
							: 0
						: isDesktop
							? "0 0 25px 25px"
							: "0 0 25px 25px",
					left: isScrolled ? 0 : "6px",
				}}
				transition={{
					width: { duration: 0.3, delay: isScrolled ? 0.1 : 0 },
					borderRadius: { duration: 0.2, delay: !isScrolled ? 0.22 : 0 },
					left: { duration: 0.1, delay: !isScrolled ? 0.15 : 0 },
				}}
				className={cn("absolute bottom-0 z-[-1] block h-full  rounded-b-full bg-accent")}
			></motion.span>
			<Logo />

			{isDesktop ? (
				<>
					<DesktopMenu />
					<Button className="mr-3 rounded-3xl px-6 text-sm">Umów wizytę</Button>
				</>
			) : (
				<MobileMenu />
			)}
		</nav>
	);
};
