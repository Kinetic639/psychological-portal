"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Undo } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/use-media-query";

interface FlipCardContent {
	header: string;
	smallDescription: string;
	reverse: string;
	icon: string;
}

export const FlipCard = ({ cardContent }: { cardContent: FlipCardContent }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const flipBackTimeout = React.useRef<NodeJS.Timeout | null>(null);
	const isDesktop = useMediaQuery("(min-width: 768px)");

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

	const handleToggleFlip = () => {
		setIsFlipped(!isFlipped);
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
		}, 150);
	};

	useEffect(() => {
		return () => {
			if (flipBackTimeout.current) {
				clearTimeout(flipBackTimeout.current);
			}
		};
	}, []);

	return (
		<div className=" perspective-1000 min-h-[450px] w-full min-w-[300px] max-w-[340px] cursor-pointer">
			<motion.div
				className="flip-card-inner relative h-[100%] w-full"
				variants={variants}
				initial="front"
				animate={isFlipped ? "back" : "front"}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				style={{ transformStyle: "preserve-3d" }}
				onClick={!isDesktop ? handleToggleFlip : undefined}
				onMouseEnter={handleEnter}
				onMouseLeave={handleLeave}
			>
				<motion.div
					className="flip-card-front absolute left-0 top-0 h-[100%] w-full"
					style={{ backfaceVisibility: "hidden" }}
				>
					<Card className="bent-corner relative h-full bg-background p-6">
						<Image
							src={`assets/images/card-${cardContent.icon}.svg`}
							alt={`Ikona ${cardContent.header}`}
							height={130}
							width={130}
							className="mx-auto"
						/>
						<CardHeader>
							<CardTitle className="leading-2">{cardContent.header}</CardTitle>
						</CardHeader>
						<CardContent>
							<p>{cardContent.smallDescription}</p>
						</CardContent>
						<CardFooter className="absolute bottom-2 right-2 text-xs italic text-gray-500">
							<Undo />
						</CardFooter>
					</Card>
				</motion.div>

				<motion.div
					className="flip-card-back rotate-y-180 absolute left-0 top-0 h-[100%] w-full"
					style={{ backfaceVisibility: "hidden" }}
				>
					<Card className="h-[100%] bg-primary text-background">
						<CardContent className="p-10 text-center">
							<p>{cardContent.reverse}</p>
						</CardContent>
					</Card>
				</motion.div>
			</motion.div>
		</div>
	);
};
