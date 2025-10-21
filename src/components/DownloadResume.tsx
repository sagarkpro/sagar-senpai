"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function DownloadResume({ downloadResume = false }: Readonly<{ downloadResume: boolean }>) {
  const router = useRouter();

	function downloadFile(url: string, fileName: string) {
		const link = document.createElement("a");
		link.href = url;
		link.download = fileName;
		document.body.appendChild(link);
		link.click();
    link.remove();
	}

	useEffect(() => {
		if (document && downloadResume) {
			downloadFile("/Sagar_Khatri_Resume.pdf", "Sagar_Khatri_Resume.pdf");
		}
    router.replace("/");
	}, [downloadResume]);

	return <></>;
}
