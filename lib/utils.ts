import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { supabase } from "@/api/supabase";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const TOTAL_POKEMON: number = 898;

export const capitalize = (s: string) =>
	s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : s;

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

export function pokemonIdForToday() {
	const now = new Date();
	const utcDate = Date.UTC(
		now.getUTCFullYear(),
		now.getUTCMonth(),
		now.getUTCDate(),
	);
	const days = Math.floor(utcDate / (1000 * 60 * 60 * 24));
	return (days % TOTAL_POKEMON) + 1;
}
