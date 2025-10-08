import type { Metadata } from "next";
import { Geist, Geist_Mono, Inconsolata, Lobster } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider } from 'primereact/api';

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const inconsolata = Inconsolata({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal"],
	display: "swap",
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Sagar Khatri",
	description: "A website designed without AI",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inconsolata.className} antialiased`}>
        <PrimeReactProvider>
          {children}
        </PrimeReactProvider>
      </body>
		</html>
	);
}
