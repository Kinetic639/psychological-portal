import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { pages } from "@/lib/pages-list";

export function MobileMenu() {
	const staticClassnames =
		"text-md group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 font-medium capitalize transition-colors hover:text-accent focus:text-accent-foreground";

	return (
		<Drawer direction="right">
			<DrawerTrigger className="fixed left-6 top-6" style={{ zIndex: 2 }}>
				<Menu size={42} />
			</DrawerTrigger>
			<DrawerContent className="bg-background p-6">
				<NavigationMenu>
					<NavigationMenuList className="flex flex-col items-start">
						{pages.map((page, index) => (
							<NavigationMenuItem key={index}>
								<Link href={page.href} legacyBehavior passHref>
									<NavigationMenuLink className={clsx(staticClassnames)}>
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
