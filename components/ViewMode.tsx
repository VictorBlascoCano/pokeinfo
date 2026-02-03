"use client";

import {
	ButtonGroup,
	ButtonGroupSeparator,
} from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { LayoutGridIcon, ListIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

type ViewModeProps = {
	mode: "grid" | "table";
};

const ViewMode = ({ mode }: ViewModeProps) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const handleChange = (newMode: "grid" | "table") => {
		const params = new URLSearchParams(searchParams.toString());

		if (newMode === "table") {
			params.set("view", "table");
		} else {
			params.set("view", "grid");
		}

		try {
			let cookie = `pokemon_viewmode=${newMode}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax`;
			if (
				typeof window !== "undefined" &&
				window.location.protocol === "https:"
			) {
				cookie += "; Secure";
			}
			document.cookie = cookie;
		} catch (e) {
			console.error("Failed to set view mode cookie:", e);
		}

		const queryString = params.toString();
		router.push(queryString ? `?${queryString}` : window.location.pathname);

		localStorage.setItem("pokemon_viewmode", newMode);

		// fuerza que los server components (como AppSidebar) se vuelvan a renderizar
		router.refresh();
	};

	return (
		<div>
			<ButtonGroup>
				<Button
					variant={mode === "grid" ? "outline" : "secondary"}
					size="icon-lg"
					onClick={() => handleChange("grid")}
					disabled={mode === "grid"}
				>
					<LayoutGridIcon />
				</Button>
				<ButtonGroupSeparator />
				<Button
					variant={mode === "table" ? "outline" : "secondary"}
					size="icon-lg"
					onClick={() => handleChange("table")}
					disabled={mode === "table"}
				>
					<ListIcon />
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default ViewMode;
