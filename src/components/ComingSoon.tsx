import { Lobster } from "next/font/google";
import React from "react";

const lobster = Lobster({
	subsets: ["latin"],
	weight: ["400"],
	style: ["normal"],
	display: "swap",
});

export default function ComingSoon() {
	return <div className={`flex w-full h-[calc(100svh-48px)] justify-center items-center text-5xl ${lobster.className}`}>This page is coming soon!</div>;
}
