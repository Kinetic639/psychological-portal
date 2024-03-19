"use client";

import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Navbar } from "@/components/layout/navbar";
import { MobileMenu } from "@/components/ui/mobile-menu";

export function MainMenu() {
	const isDesktop = useMediaQuery("(min-width: 768px)");
	if (isDesktop === undefined) {
		return null;
	}

	return isDesktop ? <Navbar /> : <MobileMenu />;
}
