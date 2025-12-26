"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

const Pokemon = () => {
	const { id } = useParams();
	// const pokemonId = Number(id);

	// const pokemon = POKEMONS.find((p) => p.id === pokemonId);

	// if (!pokemon) {
	// 	return <div>Pokémon not found</div>;
	// }

	return (
		<div>
			{/* <h1 className="text-7xl font-bold">{pokemon.name}</h1> */}
			<Image
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
				// alt={`${pokemon.name} sprite image`}
				alt={`pokemon sprite image`}
				width={500}
				height={500}
				className="h-125 w-auto"
			/>
		</div>
	);
};

export default Pokemon;
