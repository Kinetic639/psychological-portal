import { type SanityImageSource } from "@sanity/image-url/lib/types/types";

export type Article = {
	title: string;
	titleImage: SanityImageSource;
	smallDescription: string;
	currentSlug: string;
};
