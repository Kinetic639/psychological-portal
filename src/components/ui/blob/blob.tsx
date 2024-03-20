"use client";

import React from "react";
import "./styles.css";

const paths = [
	"M467.5,289.5Q440,329,432,376.5Q424,424,380,441Q336,458,293,464Q250,470,215,444.5Q180,419,148.5,401Q117,383,84,358Q51,333,38.5,291.5Q26,250,36.5,208Q47,166,61,120.5Q75,75,125,71.5Q175,68,212.5,61Q250,54,284,69.5Q318,85,348,103.5Q378,122,404.5,148.5Q431,175,463,212.5Q495,250,467.5,289.5Z",
	"M438,290.5Q446,331,431,373.5Q416,416,377.5,440.5Q339,465,294.5,467Q250,469,214,446Q178,423,131.5,419Q85,415,71,372.5Q57,330,31.5,290Q6,250,16,203.5Q26,157,50,115.5Q74,74,128,80.5Q182,87,216,76.5Q250,66,295,49.5Q340,33,369.5,67Q399,101,417,137Q435,173,432.5,211.5Q430,250,438,290.5Z",
	"M481,296.5Q474,343,429,363.5Q384,384,356,411Q328,438,289,444Q250,450,207,454Q164,458,130,431Q96,404,89.5,361.5Q83,319,55.5,284.5Q28,250,36,207.5Q44,165,70,130.5Q96,96,127,61.5Q158,27,204,16.5Q250,6,297.5,13Q345,20,382,50.5Q419,81,427,127.5Q435,174,461.5,212Q488,250,481,296.5Z",
	"M458,287Q430,324,421.5,368.5Q413,413,374,433.5Q335,454,292.5,444Q250,434,210.5,437.5Q171,441,142.5,413.5Q114,386,88,357Q62,328,67,289Q72,250,63,209.5Q54,169,74,131.5Q94,94,137.5,88Q181,82,215.5,64Q250,46,284.5,65Q319,84,367,84.5Q415,85,426.5,128.5Q438,172,462,211Q486,250,458,287Z",
	"M461.5,296Q472,342,444.5,379.5Q417,417,373,429Q329,441,289.5,454.5Q250,468,205,468Q160,468,118,446Q76,424,49.5,384Q23,344,13.5,297Q4,250,16,204Q28,158,51.5,116.5Q75,75,124,69Q173,63,211.5,32.5Q250,2,287,37Q324,72,354.5,93.5Q385,115,418.5,140.5Q452,166,451.5,208Q451,250,461.5,296Z",
	"M426,286Q424,322,420.5,369.5Q417,417,372.5,428Q328,439,289,437.5Q250,436,214.5,428.5Q179,421,127.5,422.5Q76,424,81,371Q86,318,70,284Q54,250,44,205.5Q34,161,54.5,118Q75,75,126.5,75.5Q178,76,214,64Q250,52,290.5,52.5Q331,53,370,72Q409,91,429.5,129Q450,167,439,208.5Q428,250,426,286Z",
	"M465.5,290Q444,330,419.5,362.5Q395,395,362,417.5Q329,440,289.5,442.5Q250,445,204.5,457.5Q159,470,129,435.5Q99,401,83,363.5Q67,326,34.5,288Q2,250,14.5,203.5Q27,157,66,131Q105,105,133.5,70.5Q162,36,206,54.5Q250,73,287,72.5Q324,72,360.5,87.5Q397,103,439,128.5Q481,154,484,202Q487,250,465.5,290Z",
	"M483,295Q467,340,430.5,367Q394,394,356,404Q318,414,284,433.5Q250,453,207.5,454Q165,455,144,416Q123,377,78.5,358.5Q34,340,18.5,295Q3,250,39,214Q75,178,88.5,140Q102,102,132,69.5Q162,37,206,45Q250,53,287.5,61Q325,69,372.5,74.5Q420,80,430.5,125.5Q441,171,470,210.5Q499,250,483,295Z",
	"M442,284Q414,318,403.5,355.5Q393,393,362.5,420.5Q332,448,291,454.5Q250,461,210,452.5Q170,444,136,421Q102,398,65,370Q28,342,34,296Q40,250,63.5,216.5Q87,183,93.5,141.5Q100,100,131.5,69.5Q163,39,206.5,20.5Q250,2,294,19.5Q338,37,377,60.5Q416,84,423,129.5Q430,175,450,212.5Q470,250,442,284Z",
	"M446,292Q452,334,429.5,370.5Q407,407,367,421Q327,435,288.5,437.5Q250,440,208.5,444.5Q167,449,122.5,435.5Q78,422,54.5,381.5Q31,341,41,295.5Q51,250,68,216Q85,182,98,146.5Q111,111,133,66Q155,21,202.5,42Q250,63,284.5,73Q319,83,367.5,83.5Q416,84,415.5,133Q415,182,427.5,216Q440,250,446,292Z",
];

function getRandomValues(values: string[], count: number): string {
	// Shuffle the array and pick 'count' number of values
	const shuffled = values.sort(() => 0.5 - Math.random());
	const selectedValues = shuffled.slice(0, count);

	// Duplicate the first picked value at the end
	if (selectedValues.length > 0) {
		selectedValues.push(selectedValues[0]);
	}

	// Join the array into a string, with '; ' as a separator
	return selectedValues.join("; ");
}

export const Blob = () => {
	return (
		<div className="absolute flex h-full w-screen items-center justify-center ">
			<div className="absolute  left-0 top-0 h-fit w-[100%]">
				<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" id="blobSvg">
					<defs>
						<linearGradient id="one" x1="0%" y1="0%" x2="0%" y2="100%">
							<stop
								offset="0%"
								style={{ stopColor: `var(--blob-1-top)` }}
								data-darkreader-inline-stopcolor=""
							></stop>
							<stop
								offset="100%"
								style={{ stopColor: `var(--blob-1-bot)` }}
								data-darkreader-inline-stopcolor=""
							></stop>
						</linearGradient>
					</defs>
					<path fill="url(#one)">
						<animate
							attributeName="d"
							dur="32000ms"
							repeatCount="indefinite"
							values={getRandomValues(paths, 8)}
						></animate>
					</path>
				</svg>
			</div>
			{/*<div className="absolute  left-0 top-0 h-fit w-[100%]">*/}
			{/*	<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">*/}
			{/*		<defs>*/}
			{/*			<linearGradient id="two" x1="0%" y1="0%" x2="0%" y2="100%">*/}
			{/*				<stop*/}
			{/*					offset="0%"*/}
			{/*					style={{ stopColor: `var(--blob-2-top)` }}*/}
			{/*					data-darkreader-inline-stopcolor=""*/}
			{/*				></stop>*/}
			{/*				<stop*/}
			{/*					offset="100%"*/}
			{/*					style={{ stopColor: `var(--blob-2-bot)` }}*/}
			{/*					data-darkreader-inline-stopcolor=""*/}
			{/*				></stop>*/}
			{/*			</linearGradient>*/}
			{/*		</defs>*/}
			{/*		<path fill="url(#two)">*/}
			{/*			<animate*/}
			{/*				attributeName="d"*/}
			{/*				dur="32000ms"*/}
			{/*				repeatCount="indefinite"*/}
			{/*				values={getRandomValues(paths, 8)}*/}
			{/*			></animate>*/}
			{/*		</path>*/}
			{/*	</svg>*/}
			{/*</div>*/}
			{/*<div className="absolute  left-0 top-0 h-fit w-[100%]">*/}
			{/*	<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">*/}
			{/*		<defs>*/}
			{/*			<linearGradient id="three" x1="0%" y1="0%" x2="0%" y2="100%">*/}
			{/*				<stop*/}
			{/*					offset="0%"*/}
			{/*					style={{ stopColor: `var(--blob-3-top)` }}*/}
			{/*					data-darkreader-inline-stopcolor=""*/}
			{/*				></stop>*/}
			{/*				<stop*/}
			{/*					offset="100%"*/}
			{/*					style={{ stopColor: `var(--blob-3-bot)` }}*/}
			{/*					data-darkreader-inline-stopcolor=""*/}
			{/*				></stop>*/}
			{/*			</linearGradient>*/}
			{/*		</defs>*/}
			{/*		<path fill="url(#three)">*/}
			{/*			<animate*/}
			{/*				attributeName="d"*/}
			{/*				dur="32000ms"*/}
			{/*				repeatCount="indefinite"*/}
			{/*				values={getRandomValues(paths, 8)}*/}
			{/*			></animate>*/}
			{/*		</path>*/}
			{/*	</svg>*/}
			{/*</div>*/}
		</div>
	);
};
