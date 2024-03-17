"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import { type Article } from "@/lib/interface";
import { Card, CardContent } from "@/components/ui/card";
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
		<Carousel setApi={setApi} className=" w-full">
			<CarouselContent>
				{articles.map((article, index) => (
					<CarouselItem key={index}>
						<Card>
							<CardContent className="flex min-h-[300px] gap-4 p-6">
								<Image
									src={urlFor(article.titleImage).url()}
									width={300}
									height={300}
									alt={article.title}
								/>
								<div>
									<span className="mb-2 text-4xl font-semibold">{article.title}</span>
									<p>{article.smallDescription}</p>
								</div>
							</CardContent>
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
