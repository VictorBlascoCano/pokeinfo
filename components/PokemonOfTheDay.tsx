import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TypePill from "@/components/TypePill";
import { fetchPokemon, pokemonIdForToday } from "@/lib/utils";

const PokemonOfTheDay = async () => {
	const id = pokemonIdForToday();
	const pokemon: Pokemon = await fetchPokemon({ pokedex_number: id });

	if (!pokemon) {
		return <h1>Pokémon not available</h1>;
	}

	return (
		<section className="h-full flex flex-col gap-4">
			<h2 className="text-2xl font-bold text-white">
				Pokémon of the Day
			</h2>
			<div className="flex flex-col items-center flex-1 border-2 border-border p-4 gap-4 rounded-lg">
				<div className="w-full flex justify-between">
					<span className="text-3xl font-bold">
						#{pokemon.pokedex_number}
					</span>
					<div className="flex gap-2">
						<TypePill type={pokemon.type_1} />
						<TypePill type={pokemon.type_2} />
					</div>
				</div>
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokedex_number}.png`}
					alt={`${pokemon.name} sprite`}
					width={150}
					height={150}
					className="h-38 w-auto"
				/>
				<h3 className="text-2xl font-bold">{pokemon.name}</h3>
				<Separator />
				<ul className="w-full flex justify-around items-center">
					<li className="flex flex-col items-center">
						<span className="text-sm font-bold text-yellow-200">
							HEIGHT
						</span>
						<span>{pokemon.height} m</span>
					</li>
					<li className="flex flex-col items-center">
						<span className="text-sm font-bold text-yellow-200">
							WEIGHT
						</span>
						<span>{pokemon.weight} kg</span>
					</li>
					<li className="flex flex-col items-center">
						<span className="text-sm font-bold text-yellow-200">
							CATCH RATE
						</span>
						<span>{pokemon.catch_rate}</span>
					</li>
				</ul>
				<Separator />
				<p
					className="text-sm text-gray-300 leading-relaxed text-center my-auto overflow-hidden text-ellipsis"
					style={{
						display: "-webkit-box",
						WebkitLineClamp: 3,
						WebkitBoxOrient: "vertical",
					}}
				>
					{pokemon.pokedex}
				</p>
				<Button
					className="w-full h-10 mt-auto rounded-lg bg-transparent border border-primary text-foreground hover:bg-primary hover:text-muted font-bold text-sm transition-all"
					asChild
				>
					<Link href={`/pokemon/${pokemon.id}`}>View Full Entry</Link>
				</Button>
			</div>
		</section>
	);
};

export default PokemonOfTheDay;
