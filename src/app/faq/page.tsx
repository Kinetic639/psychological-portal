import React from "react";
import { BackgroundWrapper } from "@/components/layout/background-wrapper";
import { client } from "@/lib/sanity";
import { type FaqQuestion } from "@/lib/interface";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

async function getData() {
	const query = `*[_type == 'faq'] | order(_createdAt desc) {
    question, 
    answer
  }`;
	return client.fetch(query);
}

export default async function Faq() {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const data: FaqQuestion[] = await getData();
	return (
		<main className="flex flex-col gap-12">
			<BackgroundWrapper contentStyle="py-20">
				{/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
				{data.map((question: FaqQuestion, index: number) => (
					<Accordion type="single" collapsible key={index}>
						<AccordionItem value="item-1">
							<AccordionTrigger>{question.question}</AccordionTrigger>
							<AccordionContent>{question.answer}</AccordionContent>
						</AccordionItem>
					</Accordion>
				))}
			</BackgroundWrapper>
		</main>
	);
}
