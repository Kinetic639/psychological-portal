import React from "react";
import Link from "next/link";
import { BackgroundWrapper } from "@/components/layout/background-wrapper";
import Header from "@/app/home/header";
import { EdgeBlob } from "@/components/ui/edge-blob/edge-blob";
import { CarouselDApiDemo } from "@/components/ui/carousel-container";
import { Button } from "@/components/ui/button";
import { ImageBlobFrame } from "@/components/ui/blob-image-frame";
import { CardsSection } from "@/components/ui/cards-section";

export default async function Home() {
	return (
		<main className="flex flex-col gap-10 ">
			<BackgroundWrapper containerStyle="overflow-x-clip" contentStyle="relative ">
				<EdgeBlob />
				<Header />
			</BackgroundWrapper>

			<BackgroundWrapper
				containerStyle="bg-gradient-to-br from-primary-lightest to-accent-dark"
				contentStyle="py-16"
			>
				<CardsSection />
			</BackgroundWrapper>

			<div className="mx-auto mt-[50px] flex w-full max-w-6xl flex-col items-center justify-between gap-8 sm:px-6 md:flex-row md:items-stretch">
				<div className="flex max-w-6xl  flex-col items-center gap-8 px-6 text-center md:items-start md:gap-10 md:px-0">
					<p className="mb-2 text-center text-2xl font-medium">
						Masz pytania przed pierwszą wizytą?
					</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, nemo.</p>
					<Link href="/faq" passHref className="self-center">
						<Button className="h-[60px] rounded-[60px] px-[40px] text-[18px]">
							Pytania i odpowiedzi
						</Button>
					</Link>
				</div>
				<ImageBlobFrame alt="test" src="https://picsum.photos/400/400" className="scale-155" />
			</div>

			<div className="mx-auto flex w-full max-w-6xl flex-col justify-center gap-6 px-4 py-12">
				<p className=" text-3xl font-medium">Najnowsze artykuły</p>
				<CarouselDApiDemo />
			</div>
		</main>
	);
}
