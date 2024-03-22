"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/theme-toggle";

function Footer() {
	return (
		<footer className="mx-auto mt-[100px] flex flex-col gap-2 px-4 pb-6 text-center text-sm text-primary">
			<div className="mx-auto flex w-full max-w-6xl  flex-wrap justify-between gap-3 text-left">
				<ul className="flex min-w-[200px] flex-1 items-center gap-6">
					<li>
						<Link href="#">
							<Image src="/assets/icons/instagram.svg" alt="Instagram" width={45} height={45} />
						</Link>
					</li>
					<li>
						<Link href="#">
							<Image src="/assets/icons/facebook.svg" alt="Facebook" width={45} height={45} />
						</Link>
					</li>
					<li>
						<Link href="#">
							<Image src="/assets/icons/spotify.svg" alt="Spotify" width={45} height={45} />
						</Link>
					</li>
				</ul>

				<div className="min-w-[200px] flex-1 ">
					<p className="font-semibold">Kontakt</p>
					<p>Tel: 533-026-599</p>
					<p>Email: kolorsensu@gmail.com</p>
				</div>

				<div className="min-w-[100px] flex-1">
					<p className="font-semibold">Adres</p>
					<p> Ul. Mostowa 37/8</p>
					<p> 61-854 Poznań</p>
				</div>

				<ul className="md:flex-0 flex w-fit min-w-[150px] flex-1 flex-col justify-between gap-1 sm:justify-around">
					<li>
						<Link href="/regulamin">Regulamin</Link>
					</li>
					<li>
						<Link href="/polityka-prywatnosci">Polityka Prywatności</Link>
					</li>
					<li>
						<Link href="/faq">FAQ</Link>
					</li>
				</ul>
				<div>
					<ModeToggle />
				</div>
			</div>

			<p>© Anna Maria Kłobuchowska 2024</p>
		</footer>
	);
}

export { Footer };
