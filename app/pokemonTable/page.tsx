import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

type NamedResources = {
	name: string;
	url: string;
};

const PokemonTable = async () => {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151"); // force-cache default
	if (!res.ok) throw new Error("NO POKEMON");

	const { results: resources } = await res.json();

	const urls = resources.map((item: NamedResources) => item.url);

	const data = await Promise.all(
		urls.map((url: string) => fetch(url).then((res) => res.json()))
	);

	return (
		<div className="flex flex-col">
			<h1 className="text-4xl font-bold mb-6">PokemonTable</h1>
			<DataTable columns={columns} data={data} type="pokemon" />
		</div>
	);
};

export default PokemonTable;
