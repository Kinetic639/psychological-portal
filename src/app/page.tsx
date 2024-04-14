import React from "react";
// import Link from "next/link";
import { type SanityDocument } from "next-sanity";
// import { BackgroundWrapper } from "@/components/layout/background-wrapper";
// import Header from "@/app/(portal)/home/header";
// import { EdgeBlob } from "@/components/ui/edge-blob/edge-blob";
// import { CarouselDApiDemo } from "@/components/ui/carousel-container";
// import { Button } from "@/components/ui/button";
// import { CardsSection } from "@/components/ui/cards-section";
// import { HomeFaqSection } from "@/app/(portal)/home/home-faq-section";
import { draftMode } from "next/headers";
import Posts from "@/app/Posts";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import PostsPreview from "@/app/PostsPreview";

export default async function Home() {
	const initial = await loadQuery<SanityDocument[]>(
		POSTS_QUERY,
		{},
		{
			perspective: draftMode().isEnabled ? "previewDrafts" : "published",
		},
	);

	return draftMode().isEnabled ? (
		<PostsPreview initial={initial} />
	) : (
		<Posts posts={initial.data} />
	);
	// <main className="flex flex-col gap-14 ">
	// 	<BackgroundWrapper containerStyle="overflow-x-clip" contentStyle="relative">
	// 		<EdgeBlob />
	// 		<Header />
	// 	</BackgroundWrapper>
	//
	// 	<BackgroundWrapper
	// 		containerStyle="bg-gradient-to-br from-primary-lightest to-accent-dark"
	// 		contentStyle="py-16"
	// 	>
	// 		<CardsSection />
	// 	</BackgroundWrapper>
	//
	// 	<BackgroundWrapper>
	// 		<HomeFaqSection />
	// 	</BackgroundWrapper>
	//
	// 	<BackgroundWrapper
	// 		containerStyle="bg-gradient-to-br from-primary-lightest to-accent-dark"
	// 		contentStyle="px-4 py-12 flex flex-col gap-12"
	// 	>
	// 		<p className="text-center text-3xl font-medium">Najnowsze artykuły</p>
	// 		<CarouselDApiDemo />
	// 		<Link href="(portal)/news" className="flex w-full justify-center">
	// 			<Button className="mx-auto max-w-4xl rounded-full px-12 py-6">Więcej artykułów</Button>
	// 		</Link>
	// 	</BackgroundWrapper>
	// </main>
}
