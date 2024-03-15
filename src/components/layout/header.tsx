import { MainMenu } from "@/components/layout/main-menu";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export const Header = () => {
	return (
		<header className="sticky top-0 z-[1] mx-auto mt-4 flex w-full max-w-6xl flex-wrap items-center justify-between rounded-xl   p-4 font-sans font-bold uppercase text-primary">
			<Logo />
			<MainMenu />
			<Button className="rounded-3xl">Umów wizytę</Button>
		</header>
	);
};
