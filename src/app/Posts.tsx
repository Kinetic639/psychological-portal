// ./components/Posts.tsx

import { type SanityDocument } from "next-sanity";
import Link from "next/link";

export default function Posts({ posts }: { posts: SanityDocument[] }) {
	return (
		<main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
			{posts?.length > 0 ? (
				posts.map((post) => (
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
					<Link key={post._id} href={post.slug.current}>
						<h2 className="p-4 hover:bg-blue-50">{post.title}</h2>
					</Link>
				))
			) : (
				<div className="p-4 text-red-500">No posts found</div>
			)}
		</main>
	);
}
