import React from "react";
import ArticleItem from "./components/article-item";
import { client } from "@/lib/sanity";
import { type Article } from "@/app/news/types";

async function getData(): Promise<Article[]> {
	const query = `*[_type == 'Article'] | order(_createdAt desc) {
    title, 
    titleImage,
    smallDescription,
    "currentSlug": slug.current
  }`;
	return client.fetch(query);
}

export default async function ArticleList() {
	const data = await getData();

	return (
		<>
			<div className="flex flex-col gap-12 p-4 lg:p-0">
				{data.map((article, index) => (
					<ArticleItem key={index} article={article} />
				))}
			</div>
		</>
	);
}
