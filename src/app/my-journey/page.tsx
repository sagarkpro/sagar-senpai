"use client"
import JourneyComponent from "@/components/Journey/JourneyComponent";
import JourneyMarker from "@/components/Journey/JourneyMarker";
import { getJourneyEventsTimelineEvent } from "@/Constants/JourneyEvents";
import { Timeline } from "primereact/timeline";

export default function page() {
	const events = getJourneyEventsTimelineEvent();

	return (
		<main className="w-full flex flex-col">
			<h1 className="text-3xl font-bold text-center">From Tier-3 NPC to Main Character Energy 🗿🔥🚒, here&apos;s how I leveled up in the game of life 🎮:</h1>

			<div className="mt-12 flex">
				<Timeline value={events} align="alternate" className="customized-timeline" marker={JourneyMarker} content={JourneyComponent}></Timeline>
			</div>
		</main>
	);
}
