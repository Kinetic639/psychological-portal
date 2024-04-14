import React from "react";
import Image from "next/image";
import { BackgroundWrapper } from "@/components/layout/background-wrapper";
import { type Article } from "@/app/(portal)/news/types";
import { client } from "@/sanity/lib/client";

async function getData() {
	const query = `*[_type == 'Article'] | order(_createdAt desc) {
    title, 
    titleImage,
    smallDescription,
    "currentSlug": slug.current
  }`;
	return client.fetch(query);
}

export default async function Specjalisci() {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const data: Article[] = await getData();
	console.log(data);
	return (
		<main className="flex flex-col gap-12">
			<BackgroundWrapper contentStyle="py-12 flex flex-col gap-20">
				<div className="flex flex-col gap-6 px-4">
					<h1 className="text-center text-2xl font-medium">Dlaczego KOLOR SENSU?</h1>
					<p className="text-center text-xl">
						Bla Bla jest fajnie. Kocham Michalka on jest cool i zajebiście przystojny, kocham tego
						dzbanka
					</p>
				</div>
			</BackgroundWrapper>
			<BackgroundWrapper>
				<div className="flex flex-col gap-16">
					<h2 className="text-center text-2xl font-medium">Nasi specjaliści</h2>
					<div className="mx-auto flex flex-col justify-center gap-8 px-4 md:flex-row-reverse">
						<Image
							width={320}
							height={450}
							src="https://picsum.photos/400/550"
							alt="Anna Maria"
							className="mx-auto md:mx-0"
						/>

						<div className="flex flex-col gap-6 py-0 sm:mx-auto  md:mx-0">
							<div>
								<p className="mb-1 text-center text-xl font-medium md:text-right">
									mgr Anna Maria Kłobuchowska
								</p>
								<p className="text-center text-sm font-medium text-accent md:text-right">
									psycholog, pedagog, terapeuta, trenerka
								</p>
							</div>
							<p className="text-center text-[14px] md:text-right">
								Lubię bułki, chmurki. Chętnie jem tofucznicę i rucham Michałka
							</p>
							<div className="text-center text-[14px] md:text-right">
								<p>Pomogę Cię w:</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, nobis!</p>
							</div>
						</div>
					</div>
					<div className="mx-auto flex flex-col justify-center gap-8 px-4 md:flex-row">
						<Image
							width={320}
							height={450}
							src="https://picsum.photos/400/550"
							alt="Anna Maria"
							className="mx-auto md:mx-0"
						/>

						<div className="flex flex-col gap-6 py-0 sm:mx-auto  md:mx-0">
							<div>
								<p className="mb-1 text-center text-xl font-medium md:text-left">
									mgr Inna Jakaś Psycholka
								</p>
								<p className="text-center text-sm font-medium text-accent md:text-left">
									psycholog, pedagog, terapeuta, trenerka
								</p>
							</div>
							<p className="text-center text-[14px] md:text-left">
								Lubię bułki, chmurki. Chętnie jem tofucznicę i rucham Michałka
							</p>
							<div className="text-center text-[14px] md:text-left">
								<p>Pomogę Cię w:</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, nobis!</p>
							</div>
						</div>
					</div>
				</div>
			</BackgroundWrapper>
		</main>
	);
}
