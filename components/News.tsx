import { Calendar } from "lucide-react";
import Image from "next/image";

const News = () => {
	return (
		<div className="flex items-center border-2 border-border p-4 gap-4 rounded-lg h-full">
			<Image
				src="/map.webp"
				alt="pokemon of the day"
				width={100}
				height={100}
				className="h-full w-auto rounded-sm"
			/>
			<div className="h-full flex flex-col gap-2">
				<h3 className="text-foreground font-bold text-xl">
					The Hidden Treasure of Area Zero: Part 2 Available
				</h3>
				<p className="text-sm text-amber-100">
					Travel to the Blueberry Academy and encounter new legendary
					Pokémon in the latest expansion. Get ready for the new
					regulation set F. Here is everything you need to know to
					build your team.
				</p>
				<div className="flex items-center gap-2 text-xs mt-auto">
					<Calendar className="size-4" />2 days ago
				</div>
			</div>
		</div>
	);
};

export default News;
