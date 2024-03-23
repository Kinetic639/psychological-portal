import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
	return (
		<div className="relative flex flex-col items-stretch justify-center gap-6 py-8 lg:items-end  lg:gap-10 lg:px-6 lg:py-20">
			<h1 className=" text-center text-5xl font-medium">Kolor Sensu</h1>
			<h2 className=" pb-4 text-center text-2xl font-medium tracking-wide">
				Centrum Wsparcia Psychicznego
			</h2>
			<h2 className=" mx-auto text-center md:max-w-[60%] lg:mx-0 lg:text-right">
				Zapraszamy Cię do podjęcia podróży w kierunku lepszego zdrowia psychicznego
			</h2>
			<Button className="self-center rounded-full  px-10  py-7 text-center text-lg">
				Umów wizytę
			</Button>
		</div>
	);
};

export default Header;
