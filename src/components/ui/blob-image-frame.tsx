"use client";

import React from "react";
import Image from "next/image";
import blobshape from "blobshape";
import { photoBlobs, roundedBlobs } from "@/lib/blob-paths";
import { cn } from "@/lib/utils";

function getRandomValues(values: string[], count: number): string {
	const selectedValues = values.slice(0, count);

	if (selectedValues.length > 0) {
		selectedValues.push(selectedValues[0]);
	}

	return selectedValues.join("; ");
}

interface ImageBlobFrameProps {
	src: string;
	alt: string;
	className?: string;
}

const data = [
	"M86.5,65Q74,80,58,81.5Q42,83,30.5,74Q19,65,25,53Q31,41,35.5,24Q40,7,52,20Q64,33,81.5,41.5Q99,50,86.5,65Z",
	"M65,57.5Q62,65,54,67Q46,69,26,70Q6,71,19.5,56.5Q33,42,37.5,28Q42,14,60.5,13.5Q79,13,73.5,31.5Q68,50,65,57.5Z",
	"M83.5,65Q74,80,59.5,75Q45,70,34,66.5Q23,63,27,52Q31,41,36.5,27Q42,13,61.5,12Q81,11,87,30.5Q93,50,83.5,65Z",
	"M77.5,64Q72,78,55.5,88Q39,98,26.5,82.5Q14,67,24,54.5Q34,42,39,33Q44,24,59,22Q74,20,78.5,35Q83,50,77.5,64Z",
	"M77,57.5Q62,65,51,80Q40,95,36,77Q32,59,20,44.5Q8,30,25,22Q42,14,54.5,21Q67,28,79.5,39Q92,50,77,57.5Z",
];

const ImageBlobFrame: React.FC<ImageBlobFrameProps> = ({ src, alt, className }) => {
	return (
		<div className="relative mx-auto aspect-square min-h-[300px] w-full max-w-[450px] flex-1 flex-col items-stretch overflow-hidden">
			<div
				className="absolute inset-0 h-full w-full"
				style={{
					clipPath: "url(#blobClipPath)",
					backgroundImage: `url(${src})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					WebkitClipPath: "url(#blobClipPath)",
				}}
			></div>
			<svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 200">
				<defs>
					<clipPath id="blobClipPath" clipPathUnits="objectBoundingBox">
						<path transform="scale(0.0021, 0.0021)">
							<animate
								// style={{ width: "100%", height: "100%" }}
								attributeName="d"
								dur="32000ms"
								repeatCount="indefinite"
								values={getRandomValues(roundedBlobs, 8)}
							></animate>
						</path>
					</clipPath>
				</defs>
			</svg>
		</div>
	);
};

export { ImageBlobFrame };

// <div className="flex w-full flex-1 flex-col items-stretch border border-orange-600 ">
// 	<div
// 		className={cn("relative  w-full flex-1 border border-green-600 bg-green-400 ", className)}
// 		style={{
// 			clipPath: `url("#user-space")`,
// 			WebkitClipPath: `url("#user-space")`,
// 		}}
// 	>
// 		<svg viewBox="10 10 75 75" className="absolute left-0 top-0 h-[100%] w-[100%] ">
// 			<path fill="#49ff8f">
// 				<animate
// 					style={{ width: "100%", height: "100%" }}
// 					attributeName="d"
// 					dur="32000ms"
// 					repeatCount="indefinite"
// 					values={getRandomValues(data, 8)}
// 				></animate>
// 			</path>
// 		</svg>
// 	</div>
// </div>
