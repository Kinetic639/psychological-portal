import { type SchemaTypeDefinition } from "sanity";

import blockContent from "@/sanity/schemas/blockContent";
import article from "@/sanity/schemas/article";
import specialist from "@/sanity/schemas/specialist";
import services from "@/sanity/schemas/documents/services";
import about from "@/sanity/schemas/documents/about";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [article, specialist, blockContent, services, about],
};
