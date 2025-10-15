import TimelineEvent from "@/models/TimelineEvent";
import React from "react";

export default function JourneyComponent({ ...props }: Readonly<TimelineEvent>) {
	return (
		<div className="w-full font-semibold text-justify flex flex-col bg-background-contrast rounded-3xl p-2 py-2.5 text-white my-2">
			<div className="w-full flex flex-col bg-background-light rounded-2xl p-2 px-4">
				<h1 className="font-bold text-left md:text-justify text-xl">{props.status}</h1>
				<p className="mt-1">({props.date})</p>
			</div>
			{props.contents.map((content, index) => {
				return (
					<p className="mt-4 px-4" key={props.status + " content - " + index}>
						{content}
					</p>
				);
			})}
		</div>
	);
}
