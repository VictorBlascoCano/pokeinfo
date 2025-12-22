import { SidebarTrigger } from "@/components/ui/sidebar";

const Header = () => {
	return (
		<header className="bg-sidebar h-10 mx-2 flex items-center px-2 rounded-lg border border-sidebar-border sticky top-2">
			<SidebarTrigger />
		</header>
	);
};

export default Header;
