import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { Navbar } from "@/components/layout/navbar";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Kolor Sensu",
	description: "Centrum wsparcia psychicznego online",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={` ${inter.className} `}>
				<link rel="icon" href="/assets/images/brand_logo.png" sizes="any" />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<section className="flex flex-col">{children}</section>
					<footer className="mx-auto mt-[100px] px-10 pb-6 text-center text-sm text-primary">
						<div className="flex w-full items-center justify-between gap-4 p-3 text-left text-primary">
							<div className="mx-auto flex flex-wrap gap-8  p-3 text-left text-primary">
								<ul>
									<li>Terapia</li>
									<li>Cennik</li>
									<li>Umów wizytę</li>
								</ul>
								<ul>
									<li>Materiały</li>
									<li>Cennik</li>
									<li>Umów wizytę</li>
								</ul>
								<ul>
									<li>Materiały</li>
									<li>Cennik</li>
									<li>Umów wizytę</li>
								</ul>
							</div>
							<div className="flex-1"></div>
							<ModeToggle />
						</div>
						<p>© Anna Maria Kłobuchowska 2024</p>
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
}
