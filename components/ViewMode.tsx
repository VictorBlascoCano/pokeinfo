"use client";

import {
	ButtonGroup,
	ButtonGroupSeparator,
} from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { LayoutGridIcon, ListIcon } from "lucide-react";

type ViewModeProps = {
	mode: "grid" | "table";
	onChange: (mode: "grid" | "table") => void;
};

const ViewMode = ({ mode, onChange }: ViewModeProps) => {
	return (
		<div>
			<ButtonGroup>
				<Button
					variant={mode === "grid" ? "outline" : "secondary"}
					size="icon-lg"
					onClick={() => onChange("grid")}
					disabled={mode === "grid"}
				>
					<LayoutGridIcon />
				</Button>
				<ButtonGroupSeparator />
				<Button
					variant={mode === "table" ? "outline" : "secondary"}
					size="icon-lg"
					onClick={() => onChange("table")}
					disabled={mode === "table"}
				>
					<ListIcon />
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default ViewMode;
