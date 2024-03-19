"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { clsx } from "clsx";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePageScrolled } from "@/hooks/usePageScrolled";
import { pages } from "@/lib/pages-list";

export const DesktopMenu = () => {
	const isScrolled = usePageScrolled();
	const { theme, resolvedTheme } = useTheme();

	const isDarkTheme = theme === "dark" || resolvedTheme === "dark";
	const effectiveTheme = isDarkTheme !== isScrolled ? "dark" : "light";

	const staticClassNames =
		"group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors";

	const dynamicClassNames = clsx({
		"text-background hover:text-accent-lightest focus:text-accent-foreground":
			effectiveTheme === "dark",
		"hover:text-accent focus:text-accent-foreground": effectiveTheme === "light",
	});

	return (
		<NavigationMenu>
			<NavigationMenuList>
				{pages.slice(1).map((page, index) => (
					<NavigationMenuItem key={index}>
						<Link href={page.href} legacyBehavior passHref>
							<NavigationMenuLink
								className={clsx(
									"capitalize",
									navigationMenuTriggerStyle(),
									staticClassNames,
									dynamicClassNames,
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
