"use server";

import DashboardWrapper from "@/components/DashboardWrapper";

export default async function Home() {
	return (
		<DashboardWrapper downloadResume={false}/>
	);
}
