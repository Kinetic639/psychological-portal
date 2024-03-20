import React from "react";
import { BackgroundWrapper } from "@/components/layout/background-wrapper";
import Header from "@/app/home/header";

// const cardsContent = [
// 	{
// 		header: "Komunikacja Pełna Empatii - NVC (Nonviolent Communication)",
// 		smallDescription:
// 			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni.",
// 		reverse:
// 			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni. dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos.",
// 	},
// 	{
// 		header: "Holisticzne Podejście do Zdrowia",
// 		smallDescription:
// 			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni.",
// 		reverse:
// 			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni. consectetur adipisicing elit. Consequuntur dicta dignissimos fuga.",
// 	},
// 	{
// 		header: "Wartości, które Nas Kierują",
// 		smallDescription:
// 			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni.",
// 		reverse:
// 			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni. fugit illo magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos fuga fugit illo magni. consectetur adipisicing elit.",
// 	},
// ];

export default async function Home() {
	return (
		<main className="flex flex-col gap-12">
			<BackgroundWrapper contentStyle="relative border">
				<Header />
			</BackgroundWrapper>

			{/*<BackgroundWrapper containerStyle="bg-accent-lightest" contentStyle="py-20">*/}
			{/*	<div className=" flex flex-col gap-12">*/}
			{/*		<div>*/}
			{/*			<p className="mb-3 text-3xl font-medium">*/}
			{/*				Co wyróżnia Centrum Zdrowia Psychicznego KOLOR SENSU?*/}
			{/*			</p>*/}
			{/*			<p>*/}
			{/*				W KOLOR SENSU zapraszamy Cię do podjęcia podróży w kierunku lepszego zdrowia*/}
			{/*				psychicznego, wspierani przez specjalistów, którzy są zobowiązani do pracy z*/}
			{/*				szacunkiem, empatią i zrozumieniem.*/}
			{/*			</p>*/}
			{/*		</div>*/}
			{/*		<div className="relative z-0 mx-auto  flex w-full justify-center gap-12">*/}
			{/*			{cardsContent.map((card, index) => (*/}
			{/*				<FlipCard cardContent={card} key={index} />*/}
			{/*			))}*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</BackgroundWrapper>*/}

			{/*<div className="mx-auto mt-[50px] flex max-w-6xl flex-col items-center gap-10 px-4">*/}
			{/*	<p className="mb-2 text-3xl font-medium">Masz pytania przed pierwszą wizytą?</p>*/}
			{/*	<Link href="/faq" passHref>*/}
			{/*		<Button className="h-[80px] rounded-[60px] px-[40px] text-[26px]">*/}
			{/*			Pytania i odpowiedzi*/}
			{/*		</Button>*/}
			{/*	</Link>*/}
			{/*</div>*/}

			{/*<div className="mx-auto mt-[50px] flex w-full max-w-6xl flex-col justify-center gap-6 px-4">*/}
			{/*	<p className=" text-3xl font-medium">Najnowsze artykuły</p>*/}
			{/*	<CarouselDApiDemo />*/}
			{/*</div>*/}
		</main>
	);
}
