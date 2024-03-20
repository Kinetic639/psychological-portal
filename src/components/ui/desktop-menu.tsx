"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePageScrolled } from "@/hooks/usePageScrolled";
import { pages } from "@/lib/pages-list";
import { cn } from "@/lib/utils";

export const DesktopMenu = () => {
	const isScrolled = usePageScrolled();
	const currentPath = usePathname();
	const { theme, resolvedTheme } = useTheme();

	const isDarkTheme = theme === "dark" || resolvedTheme === "dark";
	const effectiveTheme = isDarkTheme !== isScrolled ? "dark" : "light";

	const staticClassNames =
		"group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors ";

	const dynamicClassNames = clsx({
		"hover:text-accent-lightest": effectiveTheme === "dark",
		"hover:text-accent": effectiveTheme === "light",
	});

	return (
		<NavigationMenu className="relative z-10 flex flex-1 items-center justify-center">
			<NavigationMenuList>
				{pages.slice(1).map((page, index) => (
					<NavigationMenuItem key={index}>
						<Link href={page.href} legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									"capitalize",
									navigationMenuTriggerStyle(),
									staticClassNames,
									dynamicClassNames,
									currentPath === `${page.href}` &&
										(isScrolled ? "text-accent-lightest" : "text-accent"),
								)}
							>
								{page.title}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};
