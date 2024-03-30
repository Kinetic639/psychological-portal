import React from "react";
import Link from "next/link";
import { BackgroundWrapper } from "@/components/layout/background-wrapper";
import Header from "@/app/home/header";
import { EdgeBlob } from "@/components/ui/edge-blob/edge-blob";
import { CarouselDApiDemo } from "@/components/ui/carousel-container";
import { Button } from "@/components/ui/button";
import { CardsSection } from "@/components/ui/cards-section";
import { HomeFaqSection } from "@/app/home/home-faq-section";

export default async function Home() {
	return (
		<main className="flex flex-col gap-14 ">
			<BackgroundWrapper containerStyle="overflow-x-clip" contentStyle="relative">
				<EdgeBlob />
				<Header />
			</BackgroundWrapper>

			<BackgroundWrapper
				containerStyle="bg-gradient-to-br from-primary-lightest to-accent-dark"
				contentStyle="py-16"
			>
				<CardsSection />
			</BackgroundWrapper>

			<BackgroundWrapper>
				<HomeFaqSection />
			</BackgroundWrapper>

			<BackgroundWrapper
				containerStyle="bg-gradient-to-br from-primary-lightest to-accent-dark"
				contentStyle="px-4 py-12 flex flex-col gap-12"
			>
				<p className="text-center text-3xl font-medium">Najnowsze artykuły</p>
				<CarouselDApiDemo />
				<Link href="artykuly" className="flex w-full justify-center">
					<Button className="mx-auto max-w-4xl rounded-full px-12 py-6">Więcej artykułów</Button>
				</Link>
			</BackgroundWrapper>
		</main>
	);
}
