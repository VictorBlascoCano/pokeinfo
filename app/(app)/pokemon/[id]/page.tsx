import PokemonClient from "./PokemonClient";
import { fetchPokemon } from "@/lib/utils";

export default async function PokemonPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = await params;
	const pokemon = await fetchPokemon({ id: String(id) });

	if (!pokemon) return <p>No encontrado</p>;

	return <PokemonClient pokemon={pokemon} />;
}
