import { defineField, defineType } from "sanity";

export default defineType({
	name: "article",
	title: "Artykuł",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Tytuł",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		}),
		defineField({
			name: "author",
			title: "Autor",
			type: "reference",
			to: { type: "specialist" },
		}),
		defineField({
			name: "mainImage",
			title: "Główny obraz",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Opis alternatywny",
				},
			],
		}),
		defineField({
			name: "publishedAt",
			title: "Data publikacji",
			type: "datetime",
		}),
		defineField({
			name: "body",
			title: "Treść",
			type: "blockContent",
		}),
	],

	preview: {
		select: {
			title: "title",
			specialist: "specialist.name",
			media: "mainImage",
		},
		prepare(selection) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const { specialist } = selection;
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			return { ...selection, subtitle: specialist && `by ${specialist}` };
		},
	},
});
