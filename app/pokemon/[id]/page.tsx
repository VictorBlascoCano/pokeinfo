"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { capitalize } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

const PokemonPage = () => {
	const { id } = useParams();

	const {
		data: pokemon,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["pokemon", id],
		queryFn: async () => {
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
			if (!res.ok) throw new Error("No pokemon");
			return res.json();
		},
	});

	if (isLoading) return <p>Cargando...</p>;
	if (error) return <p>Error</p>;

	return (
		<div>
			<h1 className="text-7xl font-bold">{capitalize(pokemon.name)}</h1>
			<Image
				src={`${pokemon.sprites?.front_default}`}
				alt={`${pokemon.name} sprite image`}
				width={320}
				height={320}
				className="h-80 w-auto"
			/>
		</div>
	);
};

export default PokemonPage;
