"use client";

import React from "react";
import { motion } from "framer-motion";
import { MainMenu } from "@/components/layout/main-menu";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { usePageScrolled } from "@/hooks/usePageScrolled";

export const Navbar = () => {
	const isScrolled = usePageScrolled();

	return (
		<nav className="sticky top-0 z-[1] mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between p-2 font-sans font-bold uppercase text-primary">
			<motion.span
				initial={{ width: isScrolled ? "100%" : "95px" }}
				animate={{ width: isScrolled ? "100%" : "97px" }}
				transition={{ duration: 0.3 }}
				className="absolute bottom-0 left-0 z-[-1] block h-full rounded-b-[40px] bg-accent"
			></motion.span>
			<Logo />
			<MainMenu />
			<Button className="mr-3 rounded-3xl px-6">Umów wizytę</Button>
		</nav>
	);
};
