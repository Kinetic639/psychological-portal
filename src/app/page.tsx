import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BackgroundWrapper } from "@/components/layout/background-wrapper";
import Header from "@/app/home/header";
import { FlipCard } from "@/components/ui/flip-card";
import { EdgeBlob } from "@/components/ui/edge-blob/edge-blob";
import { CarouselDApiDemo } from "@/components/ui/carousel-container";
import { Button } from "@/components/ui/button";

const cardsContent = [
	{
		header: "Komunikacja Pełna Empatii - NVC (Nonviolent Communication)",
		smallDescription:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni.",
		reverse:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni. dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos.",
	},
	{
		header: "Holisticzne Podejście do Zdrowia",
		smallDescription:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni.",
		reverse:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni. consectetur adipisicing elit. Consequuntur dicta dignissimos fuga.",
	},
	{
		header: "Wartości, które Nas Kierują",
		smallDescription:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni.",
		reverse:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni. fugit illo magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni. consectetur adipisicing elit.",
	},
];

export default async function Home() {
	return (
		<main className="flex flex-col gap-10 ">
			<BackgroundWrapper containerStyle="overflow-x-clip" contentStyle="relative ">
				<EdgeBlob />
				<Header />
			</BackgroundWrapper>

			<BackgroundWrapper containerStyle="bg-accent-lightest" contentStyle="py-16">
				<div className=" flex flex-col gap-12 px-4">
					<div className="text-center">
						<p className="mb-5 text-3xl font-medium">
							Co wyróżnia Centrum Zdrowia Psychicznego KOLOR SENSU?
						</p>
						<p>
							W KOLOR SENSU zapraszamy Cię do podjęcia podróży w kierunku lepszego zdrowia
							psychicznego, wspierani przez specjalistów, którzy są zobowiązani do pracy z
							szacunkiem, empatią i zrozumieniem.
						</p>
					</div>
					<div className="relative z-0 mx-auto  flex w-full flex-wrap justify-center gap-12 p-0">
						{cardsContent.map((card, index) => (
							<FlipCard cardContent={card} key={index} />
						))}
					</div>
				</div>
			</BackgroundWrapper>

			<div className="mx-auto mt-[50px] flex w-full max-w-6xl flex-col items-center gap-8 sm:px-6 md:flex-row md:items-stretch ">
				<div className="flex  max-w-6xl flex-col items-center gap-8 px-6 text-center md:items-start md:gap-10 md:px-0">
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
				<Image
					src="https://picsum.photos/600/400"
					alt="lorem picsum"
					width={500}
					height={300}
					layout="responsive"
				/>
			</div>

			<div className="mx-auto flex w-full max-w-6xl flex-col justify-center gap-6 px-4 py-12">
				<p className=" text-3xl font-medium">Najnowsze artykuły</p>
				<CarouselDApiDemo />
			</div>
		</main>
	);
}
