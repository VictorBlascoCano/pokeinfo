import { fetchAllPokemon } from "@/lib/utils";
import { columns } from "./columns";
import PokemonView from "./PokemonView";

const Pokemon = async () => {
	const pokemons = await fetchAllPokemon(151);

	return <PokemonView pokemons={pokemons} columns={columns} />;
};

export default Pokemon;
