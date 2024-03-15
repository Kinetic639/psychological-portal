import React from "react";
import { Button } from "@/components/ui/button";
import { Blob } from "@/components/ui/blob/blob";

export default function Home() {
	return (
		<main>
			<div className="min-h-100vh relative flex">
				<Blob />

				<div className="absolute left-[20%] top-[30%]">
					<h1 className="font-heading white mb-7 text-7xl font-medium">Kolor przemiany</h1>
					<h2 className="pb-4">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dignissimos
						fuga fugit illo magni necessitatibus quia rem sit tempore.
					</h2>
					<h2>
						Consequuntur dicta dignissimos fuga fugit illo magni necessitatibus quia rem sit
						tempore.
					</h2>
					<div className="mt-[50px] flex w-[60%] justify-end px-4">
						<Button>Umów wizytę</Button>
					</div>
				</div>
			</div>
		</main>
	);
}
