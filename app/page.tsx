import PokemonCard from "@/components/PokemonCard";
import { POKEMONS } from "@/data/tempData";

const Home = () => {
	return (
		<div className="flex flex-col">
			<h1 className="text-4xl font-bold mb-6">POKEMONS</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
				{POKEMONS.map((pokemon) => (
					<PokemonCard key={pokemon.id} pokemon={pokemon} />
				))}
			</div>
		</div>
	);
};

export default Home;
