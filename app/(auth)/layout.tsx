import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "POKÉMON AZUR",
	description: "Wiki to know all about Pokémon Azur",
};

const RootLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="min-h-screen w-full flex flex-col gap-2">
					<main className="flex-1 w-full max-w-6xl mx-auto px-4 py-2 text-gray-400">
						{children}
					</main>
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
