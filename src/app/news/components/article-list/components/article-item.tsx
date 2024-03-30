import React from "react";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";
import { urlFor } from "@/lib/sanity";
import { type Article } from "@/app/news/types";
import { Card, CardContent } from "@/components/ui/card";
interface ArticleProps {
	article: Article;
}

const ArticleItem = ({ article }: ArticleProps) => {
	return (
		<Card className="h-full bg-gradient-to-br from-primary-lightest to-accent-light p-4 md:p-6">
			<CardContent className="flex h-full flex-1 flex-col  gap-4 sm:flex-row md:gap-6">
				<Image
					src={urlFor(article.titleImage).url()}
					width={300}
					height={300}
					alt={article.title}
					className="mx-auto w-full max-w-[320px] rounded-lg"
				/>
				<div className="flex min-h-10 flex-1 flex-col gap-3">
					<div className="flex h-[220px] flex-1  flex-col gap-4 ">
						<span className="overflow-hidden text-xl font-semibold">{article.title}</span>
						<p className="line-clamp-4 text-sm">{article.smallDescription} </p>
					</div>
					<button className="flex gap-2 self-end px-4 hover:text-accent-dark">
						czytaj dalej... <ChevronsRight />
					</button>
				</div>
			</CardContent>
		</Card>
	);
};
export default ArticleItem;
