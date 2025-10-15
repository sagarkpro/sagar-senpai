import ProjectDetailsComp from "@/components/project/ProjectDetailsComp";
import { Projects } from "@/Constants/Projects";
import React from "react";

export default function page() {
	return (
		<div className="flex flex-wrap justify-center w-full items-stretch">
			{Projects.map((project) => {
				return <ProjectDetailsComp {...project} key={"project - " + project.title} />;
			})}
		</div>
	);
}
