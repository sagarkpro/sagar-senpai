"use server";

import { socialLinks } from "@/Constants/Socials";
import { Lobster } from "next/font/google";
import Image from "next/image";
import { Suspense } from "react";

const lobster = Lobster({
	subsets: ["latin"],
	weight: ["400"],
	style: ["normal"],
	display: "swap",
});

export default async function Home() {
	return (
		<div className="flex justify-center mt-1 pb-8 px-4">
			<div className="w-[70rem]">
				<div className="flex flex-wrap w-full justify-center items-center mb-4 gap-y-4">
					<div className={`w-full md:w-1/3 text-center md:text-left text-5xl pl-0 md:pl-4 shrink-0 ${lobster.className}`}>Sagar Khatri</div>
					<div className="w-full md:w-1/3 flex gap-x-8 shrink-0 justify-center mb-1">
						<a href={socialLinks.get("linkedin")} target="_blank" className="w-[3rem] h-[3rem] shrink-0 relative rounded-lg overflow-clip hover:cursor-pointer">
							<Image className="object-cover" fill objectFit="cover" src="/linkedin.png" alt="linkedin" />
						</a>

						<a href={socialLinks.get("github")} target="_blank" className="w-[3rem] h-[3rem] shrink-0 relative rounded-lg overflow-clip hover:cursor-pointer">
							<Image className="object-cover" fill objectFit="cover" src="/github.png" alt="github" />
						</a>

						<a href={socialLinks.get("instagram")} target="_blank" className="w-[3rem] h-[3rem] shrink-0 relative rounded-lg overflow-clip hover:cursor-pointer">
							<Image className="object-cover" fill objectFit="cover" src="/instagram.png" alt="instagram" />
						</a>
					</div>

					<div className="w-full md:w-1/3 shrink-0 flex justify-end">
						<button className="side-animate w-full md:w-max p-0 px-4 h-10 font-bold rounded-3xl text-2xl">
							<span>
								<a href="mailto:sagarkhatri.pro@gmail.com">Hire me</a>
							</span>
						</button>
					</div>
				</div>

				<div className="w-full flex flex-col md:flex-row md:gap-x-20">
					<div className="w-full aspect-[1/1.5] md:m-0 md:w-[31rem] md:h-[47rem] shrink-0 relative rounded-[3rem] overflow-clip group">
						<Suspense fallback={<div className="bg-background-contrast animate-pulse w-full h-full" />}>
							<Image src="/sagar2.jpg" alt="sagar" className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" fill objectFit="cover" />
						</Suspense>
					</div>

					<div className="mt-4 flex flex-col gap-y-3 text-justify font-semibold text-lg">
						<div className="font-bold flex justify-center "></div>
						<h1 className="text-3xl text-center md:text-left">✨Your Vibe Code Needed a Therapist, So I Showed Up✨</h1>

						<p className="text-justify font-semibold text-lg">I have worked with some pretty cool startups like - </p>

						<p className="text-justify font-semibold text-lg">
							<span className="font-extrabold">ZentrumHub</span> - A Bootstrapped Startup revolutionizing the OTA (Online Travel Agency) Industry, Giving direct competition to big players like Booking.com, MakeMyTrip and recently recognized as the
							Hot 25 Startup!
						</p>

						<p className="text-justify font-semibold text-lg">
							<span className="font-extrabold">Nexus1.ai</span> - An AI based data extraction tool. Automate your whole legacy data kept in PDFs and CSVs to transform them into useful entries in your own Datalake. (A very complex idea oversimplified)
						</p>

						<p className="text-justify font-semibold text-lg">
							I clean other&apos;s <span className="font-extrabold">Vibe Code</span> mess-up, I write clean code, following the best practices I can find anywhere, I deliver end-to-end features. Be it Frontend, Backend or even Database, I got it
							covered!
						</p>

						<h1 className="mt-5 text-3xl font-bold text-left">My Expertise?</h1>

						<p className="text-justify font-semibold text-lg">
							I specialize in <span className="font-bold">Java Spring Boot, React, Next.js, NoSQL (DynamoDb), SQL(PostgreSQL) with 1.5 Years of Experience</span>
						</p>

						<p className="text-justify font-semibold text-lg">
							<span className="font-bold text-xl">&bull;Java</span> - A little verbose but the most reliable language out there. This is my go to language for my hobby project as well as professional work.
						</p>
					</div>
				</div>

				<div className="w-full mt-5 flex flex-col gap-y-3 text-justify font-semibold text-lg">
					<p>
						{" "}
						<span className="font-bold text-xl">&bull;Spring Boot</span> - Highly Opinionated, but hey, those opinions are from experts and I trust them. It&apos;s just like &quot;Plug & Play&quot;
					</p>

					<p>
						{" "}
						<span className="font-bold text-xl">&bull;Next.js</span> - With Next.js 15, you don&apos;t need to be an expert to make an highly optimizes and SEO friendly app, it offers everything you need out of the box! After all, this website is
						also made using Next.js!
					</p>

					<p>
						{" "}
						<span className="font-bold text-xl">&bull;PostgreSQL & DynamoDb</span> - Do I even need to say anything? I mean where you gon&apos; save you data bro?
					</p>
				</div>
			</div>
		</div>
	);
}
