"use client";

import React, { useState, useEffect } from "react";
import { Pointer } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface FlipCardContent {
	header: string;
	smallDescription: string;
	reverse: string;
}

export const FlipCard = ({ cardContent }: { cardContent: FlipCardContent }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const flipBackTimeout = React.useRef<NodeJS.Timeout | null>(null);

	const variants = {
		front: {
			rotateY: 0,
			zIndex: 1,
		},
		back: {
			rotateY: 180,
			zIndex: 0,
		},
	};

	const handleEnter = () => {
		if (flipBackTimeout.current) {
			clearTimeout(flipBackTimeout.current);
			flipBackTimeout.current = null;
		}
		setIsFlipped(true);
	};

	const handleLeave = () => {
		flipBackTimeout.current = setTimeout(() => {
			setIsFlipped(false);
		}, 150); // Adjust delay as needed
	};

	useEffect(() => {
		return () => {
			if (flipBackTimeout.current) {
				clearTimeout(flipBackTimeout.current);
			}
		};
	}, []);

	return (
		<div className="flip-card perspective-1000 mx-auto min-h-[400px] w-full">
			<motion.div
				className="flip-card-inner relative h-[100%] w-full"
				variants={variants}
				initial="front"
				animate={isFlipped ? "back" : "front"}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				style={{ transformStyle: "preserve-3d" }}
				onMouseEnter={handleEnter}
				onMouseLeave={handleLeave}
			>
				<motion.div
					className="flip-card-front absolute left-0 top-0 h-[100%] w-full"
					style={{ backfaceVisibility: "hidden" }}
				>
					<Card className="h-full bg-background">
						<CardHeader>
							<CardTitle>{cardContent.header}</CardTitle>
						</CardHeader>
						<CardContent>
							<p>{cardContent.smallDescription}</p>
						</CardContent>
						<CardFooter className="absolute bottom-2 right-2 text-xs italic text-gray-500">
							<Pointer className="mr-2 text-gray-400" />
							Więcej...
						</CardFooter>
					</Card>
				</motion.div>

				<motion.div
					className="flip-card-back rotate-y-180 absolute left-0 top-0 h-[100%] w-full"
					style={{ backfaceVisibility: "hidden" }}
				>
					<Card className="h-[100%] bg-accent-light text-background">
						<CardContent className="py-6">
							<p>{cardContent.reverse}</p>
						</CardContent>
					</Card>
				</motion.div>
			</motion.div>
		</div>
	);
};