import React from "react";
import { Button } from "@/components/ui/button";
import { Blob } from "@/components/ui/blob/blob";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CarouselDApiDemo } from "@/components/ui/carousel-container";
import { BackgroundWrapper } from "@/components/layout/background-wrapper";

export default function Home() {
	return (
		<main className="flex flex-col gap-12">
			<BackgroundWrapper contentStyle="relative py-4">
				<Blob />
				<div className="absolute left-[20%] top-[30%]">
					<h1 className="font-heading white mb-7 text-7xl font-medium">Kolor Sensu</h1>
					<h2 className="pb-4">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos
						fuga fugit illo magni necessitatibus quia rem sit tempore.
					</h2>
					<h2>
						Consequuntur dicta dignissimos fuga fugit illo magni necessitatibus quia rem sit
						tempore.
					</h2>
					<div className="mt-[50px] flex w-[70%] justify-end px-4">
						<Button className="p-6 text-xl">Umów wizytę</Button>
					</div>
				</div>
			</BackgroundWrapper>

			<BackgroundWrapper containerStyle="bg-accent-light" contentStyle="py-20">
				<div className=" flex flex-col gap-12">
					<div>
						<p className="mb-3 text-3xl font-medium">Lorem ipsum dolor sit amet?</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet inventore magni
							minima natus, praesentium veritatis
						</p>
					</div>
					<div className="mx-auto flex  w-full justify-center gap-[50px]">
						<Card className="flex-1 bg-background">
							<CardHeader>
								<CardTitle>Card Title</CardTitle>
								<CardDescription>Card Description</CardDescription>
							</CardHeader>
							<CardContent>
								<p>Card Content</p>
							</CardContent>
							<CardFooter>
								<p>Card Footer</p>
							</CardFooter>
						</Card>
						<Card className="flex-1 bg-background">
							<CardHeader>
								<CardTitle>Card Title</CardTitle>
								<CardDescription>Card Description</CardDescription>
							</CardHeader>
							<CardContent>
								<p>Card Content</p>
							</CardContent>
							<CardFooter>
								<p>Card Footer</p>
							</CardFooter>
						</Card>
						<Card className="flex-1 bg-background">
							<CardHeader>
								<CardTitle>Card Title</CardTitle>
								<CardDescription>Card Description</CardDescription>
							</CardHeader>
							<CardContent>
								<p>Card Content</p>
							</CardContent>
							<CardFooter>
								<p>Card Footer</p>
							</CardFooter>
						</Card>
					</div>
				</div>
			</BackgroundWrapper>

			<div className="mx-auto mt-[50px] flex max-w-6xl flex-col items-center gap-10 px-4">
				<p className="mb-2 text-3xl font-medium">Masz pytania przed pierwszą wizytą?</p>
				<Button className="h-[80px] rounded-[60px] px-[40px] text-[26px]">
					Pytania i odpowiedzi
				</Button>
			</div>

			<div className="mx-auto mt-[50px] flex w-full max-w-6xl  flex-col justify-center gap-6 px-4">
				<p className=" text-3xl font-medium">Najnowsze artykuły</p>
				<CarouselDApiDemo />
			</div>
		</main>
	);
}
