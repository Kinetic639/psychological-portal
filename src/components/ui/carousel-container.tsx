"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from "@/components/ui/carousel";

export function CarouselDApiDemo() {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	const goToSlide = (index: number) => {
		api?.scrollTo(index);
	};

	return (
		<div className="flex flex-col items-center ">
			<Carousel setApi={setApi} className="max-h-[300px] w-full">
				<CarouselContent>
					{Array.from({ length: 3 }).map((_, index) => (
						<CarouselItem key={index}>
							<Card>
								<CardContent className="flex min-h-[300px] items-center justify-center p-6">
									<span className="text-4xl font-semibold">Artykuł {index + 1}</span>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<div className="flex justify-center space-x-2 py-2">
				{Array.from({ length: count }).map((_, index) => (
					<button
						key={index}
						className={`h-3 w-3 rounded-full ${index === current - 1 ? "bg-primary" : "bg-gray-300"}`}
						aria-label={`Go to slide ${index + 1}`}
						onClick={() => goToSlide(index)}
					></button>
				))}
			</div>
		</div>
	);
}
