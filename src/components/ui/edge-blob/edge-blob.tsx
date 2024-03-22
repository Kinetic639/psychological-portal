"use client";

import React from "react";
import "./styles.css";
import { roundedBlobs } from "@/lib/blob-paths";

function getRandomValues(values: string[], count: number): string {
	const selectedValues = values.slice(0, count);

	if (selectedValues.length > 0) {
		selectedValues.push(selectedValues[0]);
	}

	return selectedValues.join("; ");
}

export const EdgeBlob = () => {
	return (
		<div className="absolute left-0 top-0 z-[-10] h-[100%] w-[100%]">
			<svg
				viewBox="0 0 500 500"
				xmlns="http://www.w3.org/2000/svg"
				id="blobSvg"
				className="absolute  left-[0] top-[0] w-[150%] translate-x-[-50%] translate-y-[-50%] sm:translate-x-[-60%] sm:translate-y-[-70%]  lg:w-[120%] lg:translate-x-[-70%] lg:translate-y-[-70%]"
			>
				<defs>
					<linearGradient id="one" x1="0%" y1="10%" x2="30%" y2="100%">
						<stop
							offset="0%"
							style={{ stopColor: `var(--blob-1-center)` }}
							data-darkreader-inline-stopcolor=""
						></stop>
						<stop
							offset="50%"
							style={{ stopColor: `var(--blob-1-center)` }}
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
						values={getRandomValues(roundedBlobs, 8)}
					></animate>
				</path>
			</svg>
			<svg
				viewBox="0 0 500 500"
				xmlns="http://www.w3.org/2000/svg"
				id="blobSvg"
				className="absolute bottom-[0] right-[0] w-[150%] translate-x-[60%] translate-y-[60%] sm:translate-x-[55%] sm:translate-y-[70%] lg:w-[95%] lg:translate-x-[65%] lg:translate-y-[65%]"
			>
				<defs>
					<linearGradient id="two" x1="0%" y1="10%" x2="30%" y2="100%">
						<stop
							offset="0%"
							style={{ stopColor: `var(--blob-1-center)` }}
							data-darkreader-inline-stopcolor=""
						></stop>
						<stop
							offset="50%"
							style={{ stopColor: `var(--blob-1-top)` }}
							data-darkreader-inline-stopcolor=""
						></stop>
						<stop
							offset="100%"
							style={{ stopColor: `var(--blob-1-top)` }}
							data-darkreader-inline-stopcolor=""
						></stop>
					</linearGradient>
				</defs>
				<path fill="url(#two)">
					<animate
						attributeName="d"
						dur="32000ms"
						repeatCount="indefinite"
						values={getRandomValues(roundedBlobs, 8)}
					></animate>
				</path>
			</svg>
		</div>
	);
};
