import Image from "next/image";

export default function Home() {
	return (
		<div className="flex justify-center py-8">
			<div className="w-[70rem]">
				<div className="w-full flex gap-x-20">
					<div className="w-[31rem] h-[47rem] shrink-0 relative rounded-[3rem] overflow-clip group">
						<Image className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" fill objectFit="cover" src="/sagar2.jpg" alt="sagar" />
					</div>

					<div className="mt-1 flex flex-col gap-y-3 text-justify font-semibold text-lg">
						<h1 className="text-3xl font-bold text-left">✨ Your Vibe Code Needed a Therapist, So I Showed Up ✨</h1>

						<p>I have worked with some pretty cool startups like</p>

						<p>
							<span className="font-extrabold">ZentrumHub</span> - A Bootstrapped Startup revolutionizing the OTA (Online Travel Agency) Industry, Giving direct competition to big players like Booking.com, MakeMyTrip and recently recognized as the
							Hot 25 Startup!
						</p>

						<p>
							<span className="font-extrabold">Nexus1.ai</span> - An AI based data extraction tool. Automate your whole legacy data kept in PDFs and CSVs to transform them into useful entries in your own Datalake. (A very complex idea oversimplified)
						</p>

						<p className="text-justify font-semibold text-lg">
							I clean other&apos;s <span className="font-extrabold">Vibe Code</span> mess-up, I write clean following the best practices I can find, I deliver end-to-end features. Be it Frontend, Backend or even Database, I got it covered!
						</p>

						<h1 className="mt-5 text-3xl font-bold text-left">My Expertise?</h1>

						<p>
							I specialize in <span className="font-bold">Java Spring Boot, React, Next.js, NoSQL (DynamoDb), SQL(PostgreSQL)</span>
						</p>

						<p>
							<span className="font-bold text-xl">&bull;Java</span> - A little verbose but the most reliable language out there.
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
						<span className="font-bold text-xl">&bull;Next.js</span> - With Next.js 15, you don&apos;t need to be an expert to make an highly optimizes and SEO friendly app, it offers everything you need out of the box! After all, this website is also made using
						Next.js!
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
