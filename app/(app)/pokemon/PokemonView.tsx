"use client";

import ViewMode from "@/components/ViewMode";
import PokemonCard from "@/components/PokemonCard";
import { DataTable } from "@/components/ui/data-table";
import type { ColumnDef } from "@tanstack/react-table";

type Props = {
	pokemons: Pokemon[];
	columns: ColumnDef<Pokemon>[];
	mode: "grid" | "table";
};

const PokemonView = ({ pokemons, columns, mode }: Props) => {
	return (
		<div className="flex flex-col">
			<div className="flex items-center mb-6">
				<h1 className="text-4xl font-bold mr-auto">POKÉMON</h1>
				<ViewMode mode={mode} />
			</div>

			{mode === "grid" ? (
				<div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
					{pokemons.map((pokemon) => (
						<PokemonCard key={pokemon.id} pokemon={pokemon} />
					))}
				</div>
			) : (
				<DataTable columns={columns} data={pokemons} type="pokemon" />
			)}
		</div>
	);
};

export default PokemonView;
