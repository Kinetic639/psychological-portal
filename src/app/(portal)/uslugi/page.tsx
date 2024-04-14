import React from "react";
import { BackgroundWrapper } from "@/components/layout/background-wrapper";
import { mockedServices } from "@/app/(portal)/uslugi/mocked-services";
import { type Service } from "@/app/(portal)/uslugi/types";
import ServiceCard from "@/app/(portal)/uslugi/components/service-card";
import { type Article } from "@/app/(portal)/news/types";
import { client } from "@/sanity/lib/client";

async function getData(): Promise<Article[]> {
	const query = `*[_type == 'Article'] | order(_createdAt desc) {
    title, 
    titleImage,
    smallDescription,
    "currentSlug": slug.current
  }`;
	return client.fetch(query);
}

export default async function Uslugi() {
	const data = await getData();
	console.log(data);
	return (
		<main>
			<BackgroundWrapper contentStyle="py-16 flex-col flex gap-12">
				<h1 className="text-center text-2xl font-medium">Konsultacje</h1>
				<ul className="flex flex-col items-center gap-16">
					{mockedServices
						.filter((service) => service.category === "single")
						.map((service: Service) => (
							<li key={service.id}>
								<ServiceCard service={service} />
							</li>
						))}
				</ul>
			</BackgroundWrapper>

			<BackgroundWrapper
				contentStyle="py-16 flex-col flex gap-12"
				containerStyle="bg-gradient-to-br from-primary-lightest to-accent-dark"
			>
				<h1 className="text-center text-2xl font-medium">Pakiety</h1>
				<ul className="flex flex-col items-center gap-16">
					{mockedServices
						.filter((service) => service.category === "bundle")
						.map((service: Service) => (
							<li key={service.id}>
								<ServiceCard service={service} />
							</li>
						))}
				</ul>
			</BackgroundWrapper>
		</main>
	);
}
