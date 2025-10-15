import TimelineEvent from "@/models/TimelineEvent";
import Image from "next/image";
import React from "react";

export default function JourneyMarker({ ...props }: Readonly<TimelineEvent>) {
	return (
		<div className="flex w-12 h-12 relative rounded-full align-items-center justify-content-center text-white border-circle z-1 shadow-1 mx-4 white-aura">
			<Image src={props.image} fill objectFit="cover" className="rounded-full object-cover" alt={props.organization} />
		</div>
	);
}
