"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import ViewMode from "@/components/ViewMode";
import PokemonCard from "@/components/PokemonCard";
import { DataTable } from "@/components/ui/data-table";
import type { ColumnDef } from "@tanstack/react-table";

type Props = {
	pokemons: Pokemon[];
	columns: ColumnDef<Pokemon>[];
};

const STORAGE_KEY = "pokemon_viewmode";

const PokemonView = ({ pokemons, columns }: Props) => {
	const [mode, setMode] = useState<"grid" | "table">("grid");

	useLayoutEffect(() => {
		const saved =
			typeof window !== "undefined"
				? localStorage.getItem(STORAGE_KEY)
				: null;
		if (saved === "table") {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setMode("table");
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, mode);
	}, [mode]);

	return (
		<div className="flex flex-col">
			<div className="flex items-center mb-6">
				<h1 className="text-4xl font-bold mr-auto">POKEMON</h1>
				<ViewMode mode={mode} onChange={setMode} />
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
