"use client";

import React from "react";
import { ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { pages } from "@/lib/pages-list";
import { cn } from "@/lib/utils";
import { usePageScrolled } from "@/hooks/usePageScrolled";
import { Logo } from "@/components/ui/logo";

export function MobileMenu() {
	const isScrolled = usePageScrolled();
	const currentPath = usePathname();
	const staticClassnames =
		"min-w-[240px] text-sm py-5 rounded-0 flex w-max font-medium capitalize transition-colors border-b-gray-300 border-b hover:text-accent";

	return (
		<Drawer direction="right">
			<DrawerTrigger
				className="fixed right-5 top-4 flex items-center  gap-2 font-normal"
				style={{ zIndex: 2 }}
			>
				<p className="text-[16px] uppercase">menu</p>
				<Menu size={28} />
			</DrawerTrigger>
			<DrawerContent className="max-w-[290px] border-none bg-background p-6">
				<DrawerHeader className="flex items-center justify-between p-0">
					<Logo />
					<DrawerTrigger className="flex items-center gap-2" style={{ zIndex: 2 }}>
						<ChevronRight size={28} />
					</DrawerTrigger>
				</DrawerHeader>

				<NavigationMenu className="flex-col">
					<NavigationMenuList className="flex-col border-t border-t-gray-300">
						{pages.map((page, index) => (
							<NavigationMenuItem key={index}>
								<Link href={page.href} legacyBehavior passHref>
									<NavigationMenuLink
										className={cn(
											staticClassnames,
											currentPath === `${page.href}` &&
												(isScrolled ? "text-accent-lightest" : "border-b-accent text-accent"),
										)}
									>
										{page.title}
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>
			</DrawerContent>
		</Drawer>
	);
}
