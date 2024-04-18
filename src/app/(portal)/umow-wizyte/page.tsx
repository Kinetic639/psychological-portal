import React from "react";
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
					<h1 className="text-center text-2xl font-medium">Umawianie wizyty</h1>
					<p className="text-center text-xl">
						obecnie wizyty można umawiać telefonicznie pod numerem 123 456 789
					</p>
					<p className="text-center text-xl">lub</p>
					<p className="text-center text-xl">
						mailowo pod adresem mailowym:
						<a href="mailto:your-email@example.com" className="text-secondary">
							kolorsensu@gmail.com
						</a>
						<a href="mailto:info@mailgo.dev">info@mailgo.dev</a>
					</p>
				</div>
			</BackgroundWrapper>
		</main>
	);
}
