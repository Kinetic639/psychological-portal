import { type QueryParams, type SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";

import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import PostPreview from "@/app/[slug]/PostPreview";
import Post from "@/app/[slug]/Post";

export async function generateStaticParams() {
	const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

	return posts.map((post) => ({
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
		slug: post.slug.current,
	}));
}

export default async function Page({ params }: { params: QueryParams }) {
	const initial = await loadQuery<SanityDocument>(POST_QUERY, params, {
		// Because of Next.js, RSC and Dynamic Routes this currently
		// cannot be set on the loadQuery function at the "top level"
		perspective: draftMode().isEnabled ? "previewDrafts" : "published",
	});

	return draftMode().isEnabled ? (
		<PostPreview initial={initial} params={params} />
	) : (
		<Post post={initial.data} />
	);
}
