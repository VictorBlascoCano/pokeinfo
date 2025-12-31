"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { capitalize, fetchPokemon } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

const PokemonPage = () => {
	const { id } = useParams();

	const {
		data: pokemon,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["pokemon", id],
		queryFn: async () => fetchPokemon(Number(id)),
		enabled: !!id,
	});

	if (isLoading) return <p>Cargando...</p>;
	if (error) return <p>Error</p>;
	if (!pokemon) return <p>No encontrado</p>;

	return (
		<div>
			<h1 className="text-7xl font-bold">{capitalize(pokemon.name)}</h1>
			<Image
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
				alt={`${pokemon.name} sprite image`}
				width={320}
				height={320}
				className="h-80 w-auto"
			/>
		</div>
	);
};

export default PokemonPage;
