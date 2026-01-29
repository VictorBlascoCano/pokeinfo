"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { fetchPokemon } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import TypePill from "@/components/TypePill";
import { useState } from "react";
import { Mars, Venus } from "lucide-react";

const PokemonPage = () => {
	const { id } = useParams();

	const [isShiny, setIsShiny] = useState(false);

	const {
		data: pokemon,
		isLoading,
		error,
	} = useQuery<Pokemon>({
		queryKey: ["pokemon", id],
		queryFn: async () => fetchPokemon({ id: String(id) }),
		enabled: !!id,
	});

	if (isLoading) return <p>Cargando...</p>;
	if (error) return <p>Error</p>;
	if (!pokemon) return <p>No encontrado</p>;

	const pokemon_abilities_size =
		(pokemon.ability_1 ? 1 : 0) +
		(pokemon.ability_2 ? 1 : 0) +
		(pokemon.hidden_ability ? 1 : 0);

	return (
		<div className="flex flex-col">
			<div className="flex gap-4 items-end mb-4">
				<h1 className="text-5xl sm:text-7xl font-bold">
					{pokemon.name}
				</h1>
				<span className="text-2xl sm:text-4xl font-bold text-amber-100">
					#{pokemon.pokedex_number}
				</span>
			</div>
			<p className="max-w-xl">{pokemon.pokedex}</p>
			<Separator className="my-4" />
			<div className="grid grid-cols-2 sm:grid-cols-8 grid-rows-10 sm:grid-rows-5 gap-6 auto-rows-fr">
				<div className="bg-card border-2 border-accent p-4 rounded-lg col-span-2 sm:col-span-4 row-span-3 flex flex-col justify-center items-center">
					<div className="w-full flex justify-between">
						<div className="flex gap-2">
							<TypePill type={pokemon.type_1} />
							<TypePill type={pokemon.type_2} />
						</div>
						<Button
							variant="default"
							onClick={() => setIsShiny((preVal) => !preVal)}
							className="uppercase font-bold"
						>
							{isShiny ? "Default" : "Shiny"}
						</Button>
					</div>
					{isShiny ? (
						<Image
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.pokedex_number}.png`}
							alt={`${pokemon.name} shiny sprite image`}
							width={320}
							height={320}
							className="h-full w-auto object-contain"
						/>
					) : (
						<Image
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokedex_number}.png`}
							alt={`${pokemon.name} sprite image`}
							width={320}
							height={320}
							className="h-full w-auto object-contain"
						/>
					)}
				</div>
				<div className="bg-card flex flex-col gap-2 border-2 border-accent p-4 rounded-lg col-span-1 sm:col-span-2 row-span-2">
					<h2 className="uppercase text-xl font-bold">
						Physical Specs
					</h2>
					<div className="flex-1 grid gap-4 grid-cols-1 sm:grid-cols-2 grid-rows-3 sm:grid-rows-2">
						<div className="bg-background flex flex-col justify-center items-center p-4 rounded-lg col-span-1 row-span-1">
							<h3>Height</h3>
							<span className="font-bold text-xl">
								{pokemon.height} m
							</span>
						</div>
						<div className="bg-background flex flex-col justify-center items-center p-4 rounded-lg col-span-1 row-span-1">
							<h3>Weight</h3>
							<span className="font-bold text-xl">
								{pokemon.weight} kg
							</span>
						</div>
						<div className="bg-background flex flex-col justify-center items-center p-4 rounded-lg col-span-1 sm:col-span-2 row-span-1">
							<h3>Egg Groups</h3>
							<span className="font-bold text-xl">
								{pokemon.catch_rate}
							</span>
						</div>
					</div>
				</div>
				<div className="bg-card flex flex-col gap-2 border-2 border-accent p-4 rounded-lg col-span-1 sm:col-span-2 row-span-2">
					<h2 className="uppercase text-xl font-bold">Abilities</h2>
					<div className="flex-1 flex flex-col gap-2 justify-between">
						<div className="flex flex-col gap-2">
							{pokemon.ability_1 && (
								<div
									key={pokemon.ability_1.id}
									className="bg-background p-2 rounded-lg font-bold text-xl"
								>
									<h4 className="text-sm uppercase">
										{pokemon.ability_1.name}
									</h4>
									<p
										className="text-xs text-foreground/50  whitespace-normal text-start overflow-hidden text-ellipsis"
										style={{
											display: "-webkit-box",
											WebkitLineClamp:
												pokemon_abilities_size < 3
													? 3
													: 1,
											WebkitBoxOrient: "vertical",
										}}
									>
										{pokemon.ability_1.description}
									</p>
								</div>
							)}
							{pokemon.ability_2 && (
								<div
									key={pokemon.ability_2.id}
									className="bg-background p-2 rounded-lg font-bold text-xl"
								>
									<h4 className="text-sm uppercase">
										{pokemon.ability_2.name}
									</h4>
									<p
										className="text-xs text-foreground/50  whitespace-normal text-start overflow-hidden text-ellipsis"
										style={{
											display: "-webkit-box",
											WebkitLineClamp:
												pokemon_abilities_size < 3
													? 3
													: 1,
											WebkitBoxOrient: "vertical",
										}}
									>
										{pokemon.ability_2.description}
									</p>
								</div>
							)}
						</div>
						{pokemon.hidden_ability && (
							<div>
								<h3 className="uppercase text-lg font-bold text-foreground/70">
									HIDDEN
								</h3>
								<div
									key={pokemon.hidden_ability.id}
									className="bg-background p-2 rounded-lg font-bold text-xl"
								>
									<h4 className="text-sm uppercase">
										{pokemon.hidden_ability.name}
									</h4>
									<p
										className="text-xs text-foreground/50  whitespace-normal text-start overflow-hidden text-ellipsis"
										style={{
											display: "-webkit-box",
											WebkitLineClamp:
												pokemon_abilities_size < 3
													? 3
													: 1,
											WebkitBoxOrient: "vertical",
										}}
									>
										{pokemon.hidden_ability.description}
									</p>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="bg-card border-2 border-accent p-4 rounded-lg col-span-2 sm:col-span-4 row-span-3 flex justify-center items-center">
					<h2 className="uppercase">Base Stats</h2>
				</div>
				<div className="bg-card border-2 border-accent p-4 rounded-lg col-span-1 row-span-1 flex flex-col justify-center items-center gap-4">
					<h2 className="uppercase text-center font-bold">
						Catch Rate
					</h2>
					<span className="font-bold text-xl">
						{pokemon.catch_rate}
					</span>
				</div>
				<div className="bg-card border-2 border-accent p-4 rounded-lg col-span-1 row-span-1 flex flex-col justify-center items-center gap-4">
					<h2 className="uppercase text-center font-bold">
						Base Exp
					</h2>
					<span className="font-bold text-xl">
						{pokemon.base_exp}
					</span>
				</div>
				<div className="bg-card border-2 border-accent p-4 rounded-lg col-span-1 row-span-1 flex flex-col justify-center items-center gap-4">
					<h2 className="uppercase text-center font-bold">
						Growth Rate
					</h2>
					<span className="font-bold text-xl">
						{pokemon.growth_rate?.name}
					</span>
				</div>
				<div className="bg-card border-2 border-accent p-4 rounded-lg col-span-1 row-span-1 flex flex-col justify-center items-center gap-4">
					<h2 className="uppercase text-center font-bold">
						Happiness
					</h2>
					<span className="font-bold text-xl">
						{pokemon.happiness}
					</span>
				</div>
				<div className="bg-card border-2 border-accent p-4 rounded-lg col-span-1 row-span-1 flex flex-col justify-center items-center gap-4">
					<h2 className="uppercase text-center font-bold">
						Generation
					</h2>
					<span className="font-bold text-xl">
						{pokemon.generation}
					</span>
				</div>
				<div className="bg-card border-2 border-accent p-4 rounded-lg col-span-1 row-span-1 flex flex-col justify-center items-center gap-4">
					<h2 className="uppercase text-center font-bold">EVs</h2>
					<span className="font-bold text-xl">TODO</span>
				</div>
				<div className="bg-card border-2 border-accent p-4 rounded-lg col-span-1 row-span-1 flex flex-col justify-center items-center gap-4">
					<h2 className="uppercase text-center font-bold">
						Hatch Steps
					</h2>
					<span className="font-bold text-xl">
						{pokemon.hatch_steps}
					</span>
				</div>
				<div className="bg-card border-2 border-accent p-4 rounded-lg col-span-1 row-span-1 flex flex-col justify-center items-center gap-4">
					<h2 className="uppercase text-center font-bold">
						Gender Ratio
					</h2>

					<span className="font-bold text-sm flex items-center gap-2">
						<Mars />
						{pokemon.gender_ratio?.percentage ?? 0} %
					</span>
					<span className="font-bold text-sm flex items-center gap-2">
						<Venus />
						{pokemon.gender_ratio?.percentage
							? 100 - pokemon.gender_ratio.percentage
							: 0}{" "}
						%
					</span>
				</div>
			</div>
		</div>
	);
};

export default PokemonPage;
