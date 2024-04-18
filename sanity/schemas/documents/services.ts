import { defineField, defineType } from "sanity";

export default defineType({
	name: "services",
	title: "Usługi",
	type: "document",
	fields: [
		defineField({
			name: "Name",
			title: "Nazwa",
			type: "string",
		}),
		defineField({
			name: "priceFrom",
			title: "Cena od",
			type: "number",
		}),
		defineField({
			name: "priceTo",
			title: "Cena do",
			type: "number",
		}),
		defineField({
			name: "description",
			title: "Opis",
			type: "blockContent",
		}),
	],
});
