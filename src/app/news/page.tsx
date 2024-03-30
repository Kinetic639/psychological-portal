import React from "react";
import { BackgroundWrapper } from "@/components/layout/background-wrapper";
import ArticleList from "@/app/news/components/article-list/article-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Podcasts from "@/app/news/components/podcasts/podcasts";

export default async function NewPage() {
	return (
		<main className="flex flex-col gap-12 ">
			<BackgroundWrapper containerStyle="flex-1" contentStyle="py-12">
				<Tabs defaultValue="articles" className="mx-auto flex w-full flex-col gap-3">
					<TabsList className="mx-auto">
						<TabsTrigger value="articles">Artykuły</TabsTrigger>
						<TabsTrigger value="podcasts">Podcasty</TabsTrigger>
					</TabsList>
					<TabsContent value="articles">
						<ArticleList />
					</TabsContent>
					<TabsContent value="podcasts">
						<Podcasts />
					</TabsContent>
				</Tabs>
			</BackgroundWrapper>
		</main>
	);
}
