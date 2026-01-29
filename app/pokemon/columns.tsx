"use client";

import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const columns: ColumnDef<Pokemon>[] = [
	{
		accessorKey: "pokedex_number",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Num" />
		),
	},
	{
		accessorKey: "sprites",
		header: "Image",
		cell: ({ row }) => {
			return (
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${row.original.pokedex_number}.png`}
					alt={`${row.original.name} front sprite`}
					width={60}
					height={60}
					loading="lazy"
					className="w-full h-full object-contain"
				/>
			);
		},
	},
	{
		accessorKey: "name",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Name" />
		),
	},
	{
		id: "type_1",
		accessorFn: (row) => row.type_1?.name ?? "",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Type 1" />
		),
		cell: ({ getValue }) => getValue() as string,
		sortingFn: "alphanumeric",
	},
	{
		id: "type_2",
		accessorFn: (row) => row.type_2?.name ?? "",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Type 2" />
		),
		cell: ({ getValue }) => getValue() as string,
		sortingFn: "alphanumeric",
	},
	{
		accessorKey: "hp",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="HP" />
		),
	},
	{
		accessorKey: "attack",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Attack" />
		),
	},
	{
		accessorKey: "defense",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Defense" />
		),
	},
	{
		accessorKey: "sp_attack",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Sp. Attack" />
		),
	},
	{
		accessorKey: "sp_defense",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Sp. Defense" />
		),
	},
	{
		accessorKey: "speed",
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
