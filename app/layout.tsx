import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/Header";
import { cookies } from "next/headers";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactQueryProvider from "@/components/react-query-provider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "POKEINFO",
	description: "POKEINFO",
};

const RootLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const cookieStore = await cookies();
	const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

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
							<div className="min-h-screen w-full flex flex-col py-2 gap-2">
								<Header />
								<main className="flex-1 w-full container mx-auto px-4 py-2 text-gray-400">
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
