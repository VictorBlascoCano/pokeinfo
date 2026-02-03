import { fetchAllPokemon } from "@/lib/utils";
import { columns } from "./columns";
import PokemonView from "./PokemonView";

type SearchParams = {
	view?: string;
};

const Pokemon = async ({
	searchParams,
}: {
	searchParams: Promise<SearchParams>;
}) => {
	const params = await searchParams;
	const mode = params.view === "table" ? "table" : "grid";

	const pokemons = await fetchAllPokemon();

	return <PokemonView pokemons={pokemons} columns={columns} mode={mode} />;
};

export default Pokemon;
