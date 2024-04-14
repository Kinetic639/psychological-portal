import React from "react";
import { BackgroundWrapper } from "@/components/layout/background-wrapper";
import { type Article } from "@/app/(portal)/news/types";
import { client } from "@/sanity/lib/client";

async function getData(): Promise<Article[]> {
	const query = `*[_type == 'Article'] | order(_createdAt desc) {
    title, 
    titleImage,
    smallDescription,
    "currentSlug": slug.current
  }`;
	return client.fetch(query);
}

export default async function Produkty() {
	const data = await getData();
	console.log(data);
	return (
		<main className="flex flex-col gap-12">
			<BackgroundWrapper contentStyle="py-20">
				<p>Produkty</p>
			</BackgroundWrapper>
		</main>
	);
}
