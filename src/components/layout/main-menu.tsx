"use client";

import * as React from "react";
import Link from "next/link";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const MainMenu = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Link href="#" legacyBehavior passHref>
						<NavigationMenuLink className={`capitalize ${navigationMenuTriggerStyle()}`}>
							O nas
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="#" legacyBehavior passHref>
						<NavigationMenuLink className={`capitalize ${navigationMenuTriggerStyle()}`}>
							Artykuły
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="#" legacyBehavior passHref>
						<NavigationMenuLink className={`capitalize ${navigationMenuTriggerStyle()}`}>
							Usługi
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="#" legacyBehavior passHref>
						<NavigationMenuLink className={`capitalize ${navigationMenuTriggerStyle()}`}>
							Cennik
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="#" legacyBehavior passHref>
						<NavigationMenuLink className={`capitalize ${navigationMenuTriggerStyle()}`}>
							Produkty
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};
