import React from "react";
import { BackgroundWrapper } from "@/components/layout/background-wrapper";
import { client } from "@/lib/sanity";
import { type Article } from "@/lib/interface";
import { mockedServices } from "@/app/uslugi/mocked-services";
import { type Service } from "@/app/uslugi/types";
import ServiceCard from "@/app/uslugi/components/service-card";

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
