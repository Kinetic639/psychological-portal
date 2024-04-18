import { defineField, defineType } from "sanity";

export default defineType({
	name: "specialist",
	title: "Specjalista",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Imię i nazwisko",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
		}),
		defineField({
			name: "image",
			title: "Obraz",
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
			name: "bio",
			title: "Bio",
			type: "array",
			of: [
				{
					title: "Block",
					type: "block",
					styles: [{ title: "Normal", value: "normal" }],
					lists: [],
				},
			],
		}),
	],
	preview: {
		select: {
			title: "name",
			media: "image",
		},
	},
});
