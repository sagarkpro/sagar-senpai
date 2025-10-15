import ProjectDetails from "@/models/ProjectDetails";
import Image from "next/image";
import React from "react";

export default function ProjectDetailsComp({ ...props }: Readonly<ProjectDetails>) {
	return (
		<div className="w-full md:w-1/3 p-3">
			<div className="w-full h-full flex flex-col rounded-3xl overflow-clip bg-background-contrast">
				<div className="bg-background-light font-bold text-2xl p-4 px-6 h-24">{props.title}</div>
				<div className="w-full aspect-video relative">
					<Image src={props.image} alt={props.title} fill objectFit="cover" />
				</div>
				<div className="w-full p-4">
					{props.contents.map((content, index) => {
						return (
							<p key={props.title + " content " + index} className="font-bold text-justify mt-4">
								{content}
							</p>
						);
					})}
				</div>

				<div className="mt-auto w-full flex justify-center items-center gap-x-4 p-4 pt-0">
					<button className="side-animate w-full p-0 px-4 h-8 font-bold rounded-3xl text-xl">
						<a href={props.github}>Source Code</a>
					</button>

					{props.liveDeployment && (
						<button className="side-animate flex items-center w-full p-0 px-4 h-8 font-bold rounded-3xl text-xl">
							<a href={props.liveDeployment} target="_blank">Visit Now</a>
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
