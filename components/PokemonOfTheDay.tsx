import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const PokemonOfTheDay = () => {
	return (
		<section className="space-y-4">
			<h2 className="text-2xl font-bold text-white">
				Pokémon of the Day
			</h2>
			<div className="flex flex-col items-center border-2 border-border p-4 gap-4 rounded-lg">
				<div className="w-full flex justify-between">
					<span className="text-3xl font-bold">#94</span>
					<div className="flex gap-2">
						<span className="font-bold px-2 py-0.5 rounded-lg uppercase flex justify-center items-center bg-purple-500 text-foreground">
							Ghost
						</span>
						<span className="font-bold px-2 py-0.5 rounded-lg uppercase flex justify-center items-center bg-purple-700 text-foreground">
							Poison
						</span>
					</div>
				</div>
				<Image
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
					alt="pokemon of the day"
					width={150}
					height={150}
					className="h-38 w-auto"
				/>
				<h3 className="text-2xl font-bold">Gengar</h3>
				<Separator />
				<ul className="w-full flex justify-around items-center">
					<li className="flex flex-col items-center">
						<span className="text-sm font-bold text-yellow-200">
							HEIGHT
						</span>
						<span>1.5 m</span>
					</li>
					<li className="flex flex-col items-center">
						<span className="text-sm font-bold text-yellow-200">
							WEIGHT
						</span>
						<span>40.5 kg</span>
					</li>
					<li className="flex flex-col items-center">
						<span className="text-sm font-bold text-yellow-200">
							CATCH RATE
						</span>
						<span>45</span>
					</li>
				</ul>
				<Separator />
				<p className="text-sm text-gray-300 leading-relaxed text-center">
					To steal the life of its target, it slips into the
					prey&apos;s shadow and silently waits for an opportunity.
				</p>
				<Button
					className="w-full h-10 rounded-lg bg-transparent border border-primary text-foreground hover:bg-primary hover:text-muted font-bold text-sm transition-all"
					asChild
				>
					<Link href="/pokemon/94">View Full Entry</Link>
				</Button>
			</div>
		</section>
	);
};

export default PokemonOfTheDay;
