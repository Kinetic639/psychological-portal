"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import { ChevronsRight } from "lucide-react";
import { type Article } from "@/lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
	CarouselPrevious,
	CarouselNext,
} from "@/components/ui/carousel";
import { client, urlFor } from "@/lib/sanity";
import { useMediaQuery } from "@/hooks/use-media-query";

async function getLatestArticles() {
	const query = `*[_type == 'Article'] | order(_createdAt desc) {
    title, 
    titleImage,
    smallDescription,
    "currentSlug": slug.current
  }[0...3]`;
	return client.fetch(query);
}

export function CarouselDApiDemo() {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [articles, setArticles] = useState<Article[]>([]);

	useEffect(() => {
		getLatestArticles().then(setArticles).catch(console.error);
	}, []);

	useEffect(() => {
		if (!api) {
			return;
		}
		const handleSelect = () => {
			setCurrent(api.selectedScrollSnap());
		};

		api.on("select", handleSelect);

		return () => {
			api.off("select", handleSelect);
		};
	}, [api]);

	const goToSlide = (index: number) => {
		api?.scrollTo(index);
	};

	const isDesktop = useMediaQuery("(min-width: 768px)");
	if (isDesktop === undefined) {
		return null;
	}

	return (
		<Carousel
			setApi={setApi}
			className="mx-auto flex w-full max-w-[360px] flex-col gap-4 md:max-w-[800px]"
		>
			<CarouselContent>
				{articles.map((article, index) => (
					<CarouselItem key={index}>
						<Card className="h-full bg-background p-4 md:p-6">
							<CardContent className="flex h-full flex-1 flex-col  gap-4 sm:flex-row md:gap-6">
								<Image
									src={urlFor(article.titleImage).url()}
									width={300}
									height={300}
									alt={article.title}
									className="mx-auto w-full max-w-[320px] rounded-lg"
								/>
								<div className="flex min-h-10 flex-1 flex-col gap-3">
									<div className="flex h-[220px] flex-1  flex-col gap-4 ">
										<span className="overflow-hidden text-xl font-semibold">{article.title}</span>
										<p className="line-clamp-4 text-sm">{article.smallDescription} </p>
									</div>
									<button className="flex gap-2 self-end px-4 hover:text-accent-dark">
										czytaj dalej... <ChevronsRight />
									</button>
								</div>
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>

			{isDesktop && (
				<>
					<CarouselPrevious className="border-none" />
					<CarouselNext className="border-none" />
				</>
			)}
			<div className="flex justify-center space-x-2 py-2">
				{articles.map((_, index) => (
					<button
						key={index}
						className={`h-3 w-3 rounded-full ${index === current ? "bg-primary" : "bg-gray-300"}`}
						aria-label={`Go to slide ${index + 1}`}
						onClick={() => goToSlide(index)}
					></button>
				))}
			</div>
		</Carousel>
	);
}
