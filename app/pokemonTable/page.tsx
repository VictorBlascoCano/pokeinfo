import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { fetchPokemon } from "@/lib/utils";

const PokemonTable = async () => {
	const data = await fetchPokemon();

	return (
		<div className="flex flex-col">
			<h1 className="text-4xl font-bold mb-6">PokemonTable</h1>
			<DataTable columns={columns} data={data} type="pokemon" />
		</div>
	);
};

export default PokemonTable;
