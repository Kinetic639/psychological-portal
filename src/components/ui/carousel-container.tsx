"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import { type Article } from "@/lib/interface";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from "@/components/ui/carousel";
import { client, urlFor } from "@/lib/sanity";

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
	const [articles, setArticles] = useState<Article[]>([]); // State for storing articles

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

	return (
		<Carousel setApi={setApi} className="mx-auto w-full max-w-[800px]">
			<CarouselContent>
				{articles.map((article, index) => (
					<CarouselItem key={index}>
						<Card className="p-0">
							<CardContent className="flex flex-1 flex-col justify-start gap-2 sm:flex-row ">
								<div className="blob-wrapper">
									<Image
										src={urlFor(article.titleImage).url()}
										width={300}
										height={300}
										alt={article.title}
										layout="responsive"
										className="mx-auto max-w-[300px] border"
									/>
								</div>
								<div className="flex h-[250px]  flex-col gap-2 p-4">
									<span className="overflow-hidden text-xl font-semibold">{article.title}</span>
									<p className="line-clamp-4">{article.smallDescription} </p>
								</div>
							</CardContent>
							<CardFooter className="flex items-center justify-end ">czytaj dalej...</CardFooter>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
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
