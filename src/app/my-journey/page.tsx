"use client"
import JourneyComponent from "@/components/Journey/JourneyComponent";
import JourneyMarker from "@/components/Journey/JourneyMarker";
import { getJourneyEventsTimelineEvent } from "@/Constants/JourneyEvents";
import TimelineEvent from "@/models/TimelineEvent";
import Image from "next/image";
import { Timeline } from "primereact/timeline";

export default function page() {
	const events = getJourneyEventsTimelineEvent();

	return (
		<main className="w-full flex flex-col">
			<h1 className="text-3xl font-bold text-center">This has been my journey from being a &quot;Tier 3 College Student&quot; to a ✨&quot;Tier 1 Software Engineer&quot;✨</h1>

			<div className="mt-8">
				<Timeline value={events} align="alternate" className="customized-timeline" marker={JourneyMarker} content={JourneyComponent}></Timeline>
			</div>
		</main>
	);
}
