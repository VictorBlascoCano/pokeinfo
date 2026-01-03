import { Calendar } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const News = () => {
	return (
		<Button
			variant={"ghost"}
			className="flex justify-start items-center border-2 border-border p-4 gap-4 rounded-lg flex-1"
		>
			<Image
				src="/map.webp"
				alt="pokemon of the day"
				width={100}
				height={100}
				className="h-full w-auto rounded-sm"
			/>
			<div className=" flex flex-col gap-2 h-full">
				<h3
					className="text-foreground font-bold text-xl whitespace-normal text-start overflow-hidden text-ellipsis"
					style={{
						display: "-webkit-box",
						WebkitLineClamp: 2,
						WebkitBoxOrient: "vertical",
					}}
				>
					The Hidden Treasure of Area Zero: Part 2 Available
				</h3>
				<p
					className="text-sm text-amber-100 whitespace-normal text-start overflow-hidden text-ellipsis"
					style={{
						display: "-webkit-box",
						WebkitLineClamp: 3,
						WebkitBoxOrient: "vertical",
					}}
				>
					Travel to the Blueberry Academy and encounter new legendary
					Pokémon in the latest expansion. Get ready for the new
					regulation set F. Here is everything you need to know to
					build your team.
				</p>
				<div className="flex items-center gap-2 text-xs mt-auto">
					<Calendar className="size-4" />2 days ago
				</div>
			</div>
		</Button>
	);
};

export default News;
