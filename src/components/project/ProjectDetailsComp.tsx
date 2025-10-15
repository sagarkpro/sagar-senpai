"use client";

import ProjectDetails from "@/models/ProjectDetails";
import Image from "next/image";
import { Dialog } from "primereact/dialog";
import React, { Suspense, useState } from "react";

export default function ProjectDetailsComp({ ...props }: Readonly<ProjectDetails>) {
	const [visible, setVisible] = useState<boolean>(false);
	return (
		<div className="w-full md:w-1/3 p-3">
			<div className="w-full h-full flex flex-col rounded-3xl overflow-clip bg-background-contrast">
				<div className="bg-background-light font-bold text-2xl p-4 px-6 h-24">{props.title}</div>
				<button className="w-full aspect-video relative group" onClick={() => setVisible(true)}>
					<Image src={props.image} alt={props.title} fill objectFit="cover" className="transition-transform duration-500 ease-in-out group-hover:scale-110" />
				</button>
				<div className="w-full p-4">
					{props.contents.map((content, index) => {
						return (
							<p key={props.title + " content " + index} className="font-bold text-justify mt-4">
								{content}
							</p>
						);
					})}
				</div>

				<div className="mt-auto w-full flex flex-wrap justify-center items-center p-4 pt-0">
					<div className="p-2 w-full md:w-max grow">
						<button className="side-animate w-full p-0 px-4 h-8 font-bold rounded-3xl text-xl">
							<a href={props.github}>Source Code</a>
						</button>
					</div>

					{props.liveDeployment && (
						<div className="p-2 w-full md:w-max grow">
							<button className="side-animate flex items-center w-full p-0 px-4 h-8 font-bold rounded-3xl text-xl">
								<a href={props.liveDeployment} target="_blank">
									Visit Now
								</a>
							</button>
						</div>
					)}
				</div>
			</div>

			<Dialog onHide={() => setVisible(false)} visible={visible} className="w-[95vw] md:w-[80vw] aspect-video" showCloseIcon={true}>
				<div className="w-full aspect-video flex relative rounded-3xl overflow-clip">
					{/* <Suspense fallback={<div className="bg-background-light animate-pulse w-full h-full z-100" />}> */}
					<Image src={props.image} alt={props.title} fill objectFit="cover" />
					{/* </Suspense> */}
				</div>
			</Dialog>
		</div>
	);
}
