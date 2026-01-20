import { ModeToggle } from "@/components/ModeToggle";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "./ui/sidebar";

const Header = () => {
	return (
		<div className="sticky top-0 z-50">
			<header className="bg-background h-15 w-full flex items-center gap-2 px-2">
				<SidebarTrigger />
				<ModeToggle />
			</header>
			<Separator />
		</div>
	);
};

export default Header;
