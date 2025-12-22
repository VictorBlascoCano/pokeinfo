import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
	return (
		<header className="bg-sidebar h-10 mx-2 flex items-center gap-2 px-2 rounded-lg border border-sidebar-border sticky top-2">
			<SidebarTrigger />
			<ModeToggle />
		</header>
	);
};

export default Header;
