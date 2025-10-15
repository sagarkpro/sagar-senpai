"use server";

import { Inconsolata } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import "primereact/resources/themes/lara-light-cyan/theme.css";

const inconsolata = Inconsolata({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal"],
	display: "swap",
});

export async function generateMetadata() {
	return {
		title: {
			default: "Sagar Khatri | Software Engineer & AI Enthusiast",
			template: "%s | Sagar Khatri",
		},
		description:
			"I'm Sagar Khatri, a Software Engineer from Pune, Maharashtra, India, and the creator of sagarsenpai.co.in. I specialize in building modern, high-performance web applications using React, Next.js, Java, and Spring Boot, and I’m currently open to exciting opportunities across India.",

		keywords: [
			"sagarsenpai",
			"sagarsenpai.co.in",
			"Sagar Senpai",
			"Sagar Khatri",
			"Full Stack Developer",
			"Next.js Developer",
			"AI Engineer",
			"Spring Boot Developer",
			"React Developer",
			"Tailwind CSS",
			"Software Engineer Portfolio",
			"Java Developer",
			"TypeScript",
			"AWS Developer",
		],

		authors: [{ name: "Sagar Khatri", url: "https://www.sagarsenpai.co.in" }],
		creator: "Sagar Khatri",
		publisher: "Sagar Khatri",

		metadataBase: new URL("https://www.sagarsenpai.co.in"),

		alternates: {
			canonical: "https://www.sagarsenpai.co.in",
		},

		openGraph: {
			type: "website",
			url: "https://www.sagarsenpai.co.in",
			title: "Sagar Khatri | Software Engineer & AI Enthusiast",
			description:
				"I'm Sagar Khatri, a Software Engineer from Pune, Maharashtra, India, and the creator of sagarsenpai.co.in. I specialize in building modern, high-performance web applications using React, Next.js, Java, and Spring Boot, and I’m currently open to exciting opportunities across India.",
			siteName: "Sagar Khatri",
			locale: "en_IN",
		},

		twitter: {
			card: "summary_large_image",
			title: "Sagar Khatri | Software Engineer & AI Enthusiast",
			description:
				"I'm Sagar Khatri, a Software Engineer from Pune, Maharashtra, India, and the creator of sagarsenpai.co.in. I specialize in building modern, high-performance web applications using React, Next.js, Java, and Spring Boot, and I’m currently open to exciting opportunities across India.",
		},

		icons: {
			icon: "/favicon.ico",
		},

		category: "technology",

		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				maxSnippet: -1,
				maxImagePreview: "large",
				maxVideoPreview: -1,
			},
		},

		other: {
			"theme-color": "#0a0a0a",
			"application-name": "Sagar Khatri Portfolio",
		},
	};
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Analytics />
			<body className={`${inconsolata.className} antialiased`}>
				<PrimeReactProvider>
					<div className="w-full">
						<Navbar />
						<div className="flex justify-center mt-1 pb-8 px-4">
							<div className="w-[70rem]">{children}</div>
						</div>
						<h1 className="text-background select-none">
							Sagar Khatri is a Software Engineer from Pune, Maharashtra, India, is the creator of sagarsenpai.co.in He specializes in building modern, high-performance web applications using React, Next.js, Java, and Spring Boot, and is currently
							open to exciting opportunities across India.
						</h1>
					</div>
				</PrimeReactProvider>
			</body>
		</html>
	);
}
