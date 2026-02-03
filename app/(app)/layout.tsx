import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import ReactQueryProvider from "@/components/react-query-provider";
import { cookies } from "next/headers";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

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
	const cookieStore = await cookies();
	const cookie = cookieStore.get("sidebar_state");
	const defaultOpen = cookie ? cookie.value === "true" : true;

	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ReactQueryProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<SidebarProvider defaultOpen={defaultOpen}>
							<AppSidebar />
							<div className="min-h-screen w-full flex flex-col gap-2">
								<Header />
								<main className="flex-1 w-full max-w-6xl mx-auto px-4 py-2 text-gray-400">
									{children}
								</main>
								<Footer />
							</div>
						</SidebarProvider>
					</ThemeProvider>
				</ReactQueryProvider>
			</body>
		</html>
	);
};

export default RootLayout;
