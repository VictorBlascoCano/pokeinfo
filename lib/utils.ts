import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { supabase } from "@/api/supabase";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const capitalize = (s: string) =>
	s ? s[0].toUpperCase() + s.slice(1) : s;

export const fetchAllPokemon = async (limit?: number) => {
	let query = supabase
		.from("pokemon")
		.select()
		.order("id", { ascending: true });

	if (limit !== undefined) {
		query = query.limit(limit);
	}

	const { data, error } = await query;

	if (error) {
		console.error(error);
		return [];
	}

	return data ?? [];
};

export const fetchPokemon = async (id: number) => {
	const { data, error } = await supabase
		.from("pokemon")
		.select()
		.eq("id", id)
		.maybeSingle();

	if (error) {
		console.error(error);
		return [];
	}

	return data ?? null;
};
