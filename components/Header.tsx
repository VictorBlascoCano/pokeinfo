"use client";

import { ModeToggle } from "@/components/ModeToggle";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
	const isMobile = useIsMobile();

	return (
		<div className="sticky top-0 z-50">
			<header className="bg-background h-15 w-full flex items-center gap-12 max-w-6xl mx-auto">
				<Link href="/" className="flex items-center gap-4">
					<Image
						src="/logo.webp"
						alt="logo"
						width={50}
						height={50}
						className="h-12 w-auto"
					/>
				</Link>

				<NavigationMenu viewport={isMobile} className="mr-auto">
					<NavigationMenuList className="gap-8 flex-wrap">
						<NavigationMenuItem>
							<NavigationMenuLink
								className="text-lg font-semibold"
								asChild
							>
								<Link href="/">Home</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								className="text-lg font-semibold"
								asChild
							>
								<Link href="/pokemon">Pokédex</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								className="text-lg font-semibold"
								asChild
							>
								<Link href="/">Moves</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								className="text-lg font-semibold"
								asChild
							>
								<Link href="/">Abilities</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								className="text-lg font-semibold"
								asChild
							>
								<Link href="/">Items</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="text-lg font-semibold">
								Routes
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-75 gap-4">
									<li>
										<NavigationMenuLink asChild>
											<Link href="#">
												<div className="font-medium">
													Components
												</div>
												<div className="text-muted-foreground">
													Browse all components in the
													library.
												</div>
											</Link>
										</NavigationMenuLink>
										<NavigationMenuLink asChild>
											<Link href="#">
												<div className="font-medium">
													Documentation
												</div>
												<div className="text-muted-foreground">
													Learn how to use the
													library.
												</div>
											</Link>
										</NavigationMenuLink>
										<NavigationMenuLink asChild>
											<Link href="#">
												<div className="font-medium">
													Blog
												</div>
												<div className="text-muted-foreground">
													Read our latest blog posts.
												</div>
											</Link>
										</NavigationMenuLink>
									</li>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>

				<ModeToggle />
			</header>
			<Separator />
		</div>
	);
};

export default Header;
