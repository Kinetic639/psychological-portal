"use client";

import React from "react";
import Image from "next/image";
import { roundedBlobs } from "@/lib/blob-paths";
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

const ImageBlobFrame: React.FC<ImageBlobFrameProps> = ({ src, alt, className }) => {
	return (
		<div
			className={cn("image-blob-frame relative w-[500px]", className)}
			style={{
				clipPath: `url("#user-space")`,
				height: "500px", // Enforce height
				width: "500px", // Enforce width
				maxWidth: "100%", // Optional, to ensure responsiveness
				maxHeight: "100%", // Optional, to ensure responsiveness
			}}
		>
			<Image src={src} alt={alt} layout="responsive" width={500} height={500} quality={100} />
			<svg
				viewBox="20 20 450 420"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute left-0 top-0 z-0 m-0 h-full w-full border-0 p-0"
			>
				<defs>
					<clipPath id="user-space" clipPathUnits="userSpaceOnUse">
						<path fill="url(#one)">
							<animate
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
