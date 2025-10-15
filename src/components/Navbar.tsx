"use server";

import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import MobileSidebar from "./MobileSidebar";

export default async function Navbar() {

	return (
		<div className="bg-background-contrast my-4 mx-4 md:mx-8 p-2 px-2.5 flex justify-start items-center rounded-3xl">
			<Link href="/" className="relative w-[34px] aspect-square rounded-full overflow-clip hover:cursor-pointer">
				<Suspense fallback={<div className="bg-background-contrast animate-pulse w-full h-full" />}> 
					<Image src="/sagar-face-card.jpg" alt="sagar" fill objectFit="cover"></Image>
				</Suspense>
			</Link>

			<MobileSidebar />

			<div className="2xs:hidden md:flex mx-6 w-full justify-between items-center">
				<a href="/my-journey" className="rotate-child-div flex gap-x-1 font-extrabold text-white text-xl hover:text-primary transition-colors duration-300 ease-in-out">
					My Journey <div>🌱</div>
				</a>
				<a href="/projects" className="rotate-child-div flex gap-x-1 font-extrabold text-white text-xl hover:text-primary transition-colors duration-300 ease-in-out">
					Projects <div>🛠️</div>
				</a>
				<a href="/testimonials" className="rotate-child-div flex gap-x-1 font-extrabold text-white text-xl hover:text-primary transition-colors duration-300 ease-in-out">
					Testimonials <div>⭐</div>
				</a>
			</div>
		</div>
	);
}
