"use client";

import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { capitalize } from "@/lib/utils";
import { AccessorFn, ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
// 	id: string;
// 	amount: number;
// 	status: "pending" | "processing" | "success" | "failed";
// 	name: string;
// };

export type Pokemon = {
	id: number;
	name: string;
	height: number;
	weight: number;
	sprites: {
		front_default: string;
	};
	types: { type: { name: string } }[];
	stats: { base_stat: number; stat: { name: string } }[];
};

export const columns: ColumnDef<Pokemon>[] = [
	{
		accessorKey: "id",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="ID" />
		),
	},
	{
		accessorKey: "sprites",
		header: "Image",
		cell: ({ getValue }) => {
			const sprites = getValue() as Pokemon["sprites"];
			const src = sprites?.front_default;
			if (!src) return null;
			return (
				<Image
					src={src}
					alt="pokemon front sprite"
					width={60}
					height={60}
					loading="lazy"
					className="h-15 w-auto"
				/>
			);
		},
	},
	{
		accessorKey: "name",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Name" />
		),
		cell: ({ getValue }) => capitalize(String(getValue() ?? "")),
	},
	{
		id: "type1",
		accessorFn: (row) => row.types[0]?.type?.name ?? "",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Type 1" />
		),
	},
	{
		id: "type2",
		accessorFn: (row) => row.types[1]?.type?.name ?? "",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Type 2" />
		),
	},
	{
		id: "hp",
		accessorFn: (row) =>
			row.stats.find((stat) => stat.stat.name === "hp")?.base_stat ?? 0,
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="HP" />
		),
	},
	{
		id: "attack",
		accessorFn: (row) =>
			row.stats.find((stat) => stat.stat.name === "attack")?.base_stat ??
			0,
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Attack" />
		),
	},
	{
		id: "defense",
		accessorFn: (row) =>
			row.stats.find((stat) => stat.stat.name === "defense")?.base_stat ??
			0,
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Defense" />
		),
	},
	{
		id: "special-attack",
		accessorFn: (row) =>
			row.stats.find((stat) => stat.stat.name === "special-attack")
				?.base_stat ?? 0,
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Sp. Attack" />
		),
	},
	{
		id: "special-defense",
		accessorFn: (row) =>
			row.stats.find((stat) => stat.stat.name === "special-defense")
				?.base_stat ?? 0,
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Sp. Defense" />
		),
	},
	{
		id: "speed",
		accessorFn: (row) =>
			row.stats.find((stat) => stat.stat.name === "speed")?.base_stat ??
			0,

		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Speed" />
		),
	},
	{
		accessorKey: "height",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Height" />
		),
	},
	{
		accessorKey: "weight",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Weight" />
		),
	},
];
