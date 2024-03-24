import React from "react";
import { FlipCard } from "@/components/ui/flip-card";

const cardsContent = [
	{
		header: "KOMUNIKACJA EMPATII",
		smallDescription:
			"Stawiamy na komunikację bez przemocy (NVC), co oznacza, że w centrum naszej uwagi jest empatia, komunikaty faktów i potrzeb.",
		reverse:
			"Uważamy, że takie podejście do komunikacji jest kluczowe w budowaniu zdrowych relacji i wspiera proces leczenia. W naszym Centrum nauczysz się, jak efektywnie komunikować swoje myśli i uczucia, oraz jak słuchać innych w sposób, który promuje wzajemne zrozumienie i szacunek. To narzędzie, które przynosi korzyści nie tylko w terapii, ale również w codziennym życiu.",
		icon: "hands",
	},
	{
		header: "HOLISTYCZNE PODEJŚCIE",
		smallDescription:
			"Postrzegamy zdrowie psychiczne jako nierozerwalnie związane ze zdrowiem somatycznym, społecznym i duchowym.",
		reverse:
			"Nasze podejście jest całościowe – uwzględniamy różne aspekty życia człowieka, takie jak jego ciało, umysł, relacje oraz otoczenie. Wierzymy, że taka perspektywa jest kluczowa do osiągnięcia pełni zdrowia i dobrostanu. Nasz zespół specjalistów współpracuje, aby zrozumieć i leczyć każdego pacjenta indywidualnie, biorąc pod uwagę jego unikalne doświadczenia, potrzeby i cele.",
		icon: "heart",
	},
	{
		header: "KIERUNEK WARTOŚCI",
		smallDescription:
			"Szacunek, tolerancja, duchowość, piękno i natura to wartości, które są dla nas ",
		reverse:
			"Stworzyliśmy przestrzeń, w której każdy może poczuć się akceptowany i bezpieczny, niezależnie od swojej historii, przekonań czy doświadczeń. Promujemy otwartość, akceptację i poszanowanie różnorodności. Wierzymy, że kontakt z naturą i pielęgnowanie piękna w naszym otoczeniu mają pozytywny wpływ na zdrowie psychiczne.",
		icon: "dove",
	},
];

function CardsSection() {
	return (
		<div className=" flex flex-col gap-12 px-4">
			<div className="text-center">
				<p className="mb-5 text-3xl font-medium">
					Co wyróżnia Centrum Zdrowia Psychicznego KOLOR SENSU?
				</p>
				<p>
					Nasze podejście do terapii jest zawsze spersonalizowane i ukierunkowane na wspieranie Cię
					w odkrywaniu i rozwijaniu Twoich wewnętrznych zasobów.
				</p>
			</div>
			<div className="relative z-0 mx-auto  flex w-full flex-wrap justify-center gap-12 p-0">
				{cardsContent.map((card, index) => (
					<FlipCard cardContent={card} key={index} />
				))}
			</div>
		</div>
	);
}

export { CardsSection };
