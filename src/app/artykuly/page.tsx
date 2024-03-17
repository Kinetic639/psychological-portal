import React from "react";
import Image from "next/image";
import { BackgroundWrapper } from "@/components/layout/background-wrapper";
import { client, urlFor } from "@/lib/sanity";
import { type Article } from "@/lib/interface";

async function getData() {
	const query = `*[_type == 'Article'] | order(_createdAt desc) {
    title, 
    titleImage,
    smallDescription,
    "currentSlug": slug.current
  }`;
	return client.fetch(query);
}

export default async function NewPage() {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const data: Article[] = await getData();

	return (
		<main className="flex flex-col gap-12">
			<BackgroundWrapper containerStyle="bg-accent-light" contentStyle="py-20">
				<p>Artykuły</p>
				{data.map((article, index) => (
					<div key={index}>
						<Image
							src={urlFor(article.titleImage).url()}
							width={300}
							height={300}
							alt={article.title}
						/>
						<div className="mb-2">{article.title}</div>
						<div className="mb-2">{article.smallDescription}</div>
					</div>
				))}
			</BackgroundWrapper>
		</main>
	);
}
