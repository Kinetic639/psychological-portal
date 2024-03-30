import React from "react";
import { type Service } from "@/app/uslugi/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
	service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
	return (
		<div
			className={cn(
				"6 flex items-stretch justify-between gap-16 rounded-md p-6",
				service.category === "bundle"
					? "bg-background"
					: "bg-gradient-to-br from-primary-lightest to-accent-lightest",
			)}
		>
			<div className="flex min-w-96 max-w-24 flex-1 flex-col gap-3">
				<div className="text-xl font-medium">{service.title}</div>
				<div className="text-sm">{service.shortDescription}</div>
			</div>
			<div className="flex  flex-col gap-3 ">
				<div className="text-xl font-medium ">Cena</div>
				<div className="text flex-1 pt-2">
					od {service.priceFrom}zł do {service.priceTo}zł
				</div>
			</div>
			<Button className="self-center">Wybierz</Button>
		</div>
	);
};
export default ServiceCard;
