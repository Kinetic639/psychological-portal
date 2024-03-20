import React from "react";
import { BackgroundWrapper } from "@/components/layout/background-wrapper";
import { client } from "@/lib/sanity";
import { type Article } from "@/lib/interface";

async function getData(): Promise<Article[]> {
	const query = `*[_type == 'Article'] | order(_createdAt desc) {
    title, 
    titleImage,
    smallDescription,
    "currentSlug": slug.current
  }`;
	return client.fetch(query);
}

export default async function Uslugi() {
	const data = await getData();
	console.log(data);
	return (
		<main className="flex flex-col gap-12">
			<BackgroundWrapper contentStyle="py-20">
				<p>Usługi</p>
			</BackgroundWrapper>
		</main>
	);
}
