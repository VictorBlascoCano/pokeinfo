"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { capitalize, fetchPokemon } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import TypePill from "@/components/TypePill";
import { useState } from "react";

const PokemonPage = () => {
	const { id } = useParams();

	const [isShiny, setIsShiny] = useState(false);

	const {
		data: pokemon,
		isLoading,
		error,
	} = useQuery<Pokemon>({
		queryKey: ["pokemon", id],
		queryFn: async () => fetchPokemon(Number(id)),
		enabled: !!id,
	});

	if (isLoading) return <p>Cargando...</p>;
	if (error) return <p>Error</p>;
	if (!pokemon) return <p>No encontrado</p>;

	return (
		<div>
			<div className="flex gap-4 items-end mb-2">
				<h1 className="text-7xl font-bold">
					{capitalize(pokemon.name)}
				</h1>
				<span className="text-4xl font-bold text-amber-100">
					#{pokemon.id}
				</span>
			</div>
			<p className="max-w-xl">{pokemon.pokedex}</p>
			<Separator className="my-4" />
			<div className="grid grid-cols-8 grid-rows-4 gap-6 h-200">
				<div className="border-2 border-accent p-4 rounded-lg col-span-4 row-span-3 flex flex-col justify-center items-center">
					<div className="w-full flex justify-between">
						<div className="flex gap-2">
							<TypePill type={pokemon.type_1} />
							<TypePill type={pokemon.type_2} />
						</div>
						<Button
							variant="secondary"
							onClick={() => setIsShiny((preVal) => !preVal)}
							className="uppercase font-bold"
						>
							{isShiny ? "Default" : "Shiny"}
						</Button>
					</div>
					{isShiny ? (
						<Image
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`}
							alt={`${pokemon.name} shiny sprite image`}
							width={320}
							height={320}
							className="h-full w-auto"
						/>
					) : (
						<Image
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
							alt={`${pokemon.name} sprite image`}
							width={320}
							height={320}
							className="h-full w-auto"
						/>
					)}
				</div>
				<div className="border-2 border-accent p-4 rounded-lg col-span-2 row-span-2 flex justify-center items-center">
					<h2 className="uppercase">Physical Specs</h2>
				</div>
				<div className="border-2 border-accent p-4 rounded-lg col-span-2 row-span-2 flex justify-center items-center">
					<h2 className="uppercase">Abilities</h2>
				</div>
				<div className="border-2 border-accent p-4 rounded-lg col-span-4 row-span-3 flex justify-center items-center">
					<h2 className="uppercase">Base Stats</h2>
				</div>
				<div className="border-2 border-accent p-4 rounded-lg col-span-1 row-span-1 flex flex-col justify-center items-center gap-4">
					<h2 className="uppercase text-center font-bold">
						Catch Rate
					</h2>
					<span>{pokemon.catch_rate}</span>
				</div>
				<div className="border-2 border-accent p-4 rounded-lg col-span-1 row-span-1 flex flex-col justify-center items-center gap-4">
					<h2 className="uppercase text-center font-bold">
						Base Exp
					</h2>
					<span>{pokemon.happiness}</span>
				</div>
				<div className="border-2 border-accent p-4 rounded-lg col-span-1 row-span-1 flex flex-col justify-center items-center gap-4">
					<h2 className="uppercase text-center font-bold">
						Growth Rate
					</h2>
					<span>{pokemon.happiness}</span>
				</div>
				<div className="border-2 border-accent p-4 rounded-lg col-span-1 row-span-1 flex flex-col justify-center items-center gap-4">
					<h2 className="uppercase text-center font-bold">
						Happiness
					</h2>
					<span>{pokemon.happiness}</span>
				</div>
				<div className="border-2 border-accent p-4 rounded-lg col-span-1 row-span-1 flex flex-col justify-center items-center gap-4">
					<h2 className="uppercase text-center font-bold">
						Generation
					</h2>
					<span>{pokemon.happiness}</span>
				</div>
				<div className="border-2 border-accent p-4 rounded-lg col-span-1 row-span-1 flex flex-col justify-center items-center gap-4">
					<h2 className="uppercase text-center font-bold">EVs</h2>
					<span>{pokemon.happiness}</span>
				</div>
				<div className="border-2 border-accent p-4 rounded-lg col-span-1 row-span-1 flex flex-col justify-center items-center gap-4">
					<h2 className="uppercase text-center font-bold">
						Hatch Steps
					</h2>
					<span>{pokemon.happiness}</span>
				</div>
				<div className="border-2 border-accent p-4 rounded-lg col-span-1 row-span-1 flex flex-col justify-center items-center gap-4">
					<h2 className="uppercase text-center font-bold">
						Gender Ratio
					</h2>
					<span>{pokemon.happiness}</span>
				</div>
			</div>
		</div>
	);
};

export default PokemonPage;
