import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

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
			<body className={`${inter.className} relative`}>
				<link rel="icon" href="/assets/images/brand_logo.png" sizes="any" />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<section className="flex flex-col">{children}</section>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
