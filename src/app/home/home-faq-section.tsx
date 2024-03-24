import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImageBlobFrame } from "@/components/ui/blob-image-frame";

export function HomeFaqSection() {
	return (
		<div className="flex flex-col items-start justify-evenly gap-8  px-6 md:flex-row">
			<div className="mx-auto flex flex-1 flex-col justify-evenly gap-12 text-center md:py-16 ">
				<p className="mb-2 text-center text-2xl font-medium">Masz pytania przed pierwszą wizytą?</p>
				<Link href="/faq" passHref>
					<Button className="h-[60px] rounded-[60px] px-[40px] text-[16px]">
						Dowiedz się więcej
					</Button>
				</Link>
			</div>
			<ImageBlobFrame alt="test" src="https://picsum.photos/800/800" />
		</div>
	);
}
