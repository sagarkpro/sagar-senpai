"use server"

import DashboardWrapper from "@/components/DashboardWrapper"

export default async function page() {
	return <DashboardWrapper downloadResume={true}/>
}
