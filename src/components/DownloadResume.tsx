"use client";

import React, { useEffect } from "react";

export default function DownloadResume({ downloadResume = false }: Readonly<{ downloadResume: boolean }>) {
	function downloadFile(url: string, fileName: string) {
		const link = document.createElement("a");
		link.href = url;
		link.download = fileName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	useEffect(() => {
		if (document && downloadResume) {
			downloadFile("/Sagar_Khatri_Resume.pdf", "Sagar_Khatri_Resume.pdf");
		}

	}, [downloadResume]);

	return <></>;
}
