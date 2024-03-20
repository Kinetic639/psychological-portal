import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
	return (
		<div className="relative flex flex-col items-center justify-center  py-20">
			{/*<Blob />*/}
			<div className="z-10 flex flex-col items-center justify-center gap-2 px-6 text-center">
				<h1 className="mb-7 text-4xl font-medium ">Kolor Sensu</h1>
				<h2 className="pb-4 text-2xl font-medium tracking-wide text-secondary">
					Centrum Wsparcia Psychicznego
				</h2>
				<h2 className="text-secondary">
					Consequuntur dicta dignissimos fuga fugit illo magni necessitatibus quia rem sit tempore.
				</h2>
				<div className="mt-12 flex w-full justify-center">
					<Button className="rounded-full px-10  py-7 text-lg ">Umów wizytę</Button>
				</div>
			</div>
		</div>
	);
};

export default Header;
