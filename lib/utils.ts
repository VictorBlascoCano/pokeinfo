import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";

const TOTAL_POKEMON: number = 898;

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const capitalize = (s: string) =>
	s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : s;

export const fetchAllPokemon = async (limit?: number) => {
	const supabase = await createSupabaseServerClient();
	let query = supabase
		.from("pokemon")
		.select(
			`*,
            type_1: types!pokemones_type_1_fkey(id, name),
            type_2: types!pokemones_type_2_fkey(id, name)
        `,
		)
		.order("pokedex_number", { ascending: true });

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

export const fetchPokemon = async ({
	id,
	pokedex_number,
}: {
	id?: string;
	pokedex_number?: number;
}) => {
	if (!id && !pokedex_number) return null;

	const supabase = await createSupabaseServerClient();
	let query = supabase.from("pokemon").select(`
            *,
            color: pokemon_colors(*),
            gender_ratio: pokemon_gender_ratios(*),
            growth_rate: pokemon_growth_rates(*),
            habitat: pokemon_habitats(*),
            shape: pokemon_shapes(*),
            category: pokemon_categories(*),
            hidden_ability: abilities!pokemones_hidden_ability_fkey(*),
            ability_1: abilities!pokemones_ability_1_fkey(*),
            ability_2: abilities!pokemones_ability_2_fkey(*),
            incense: items!pokemones_incense_fkey(*),
            wild_item_common: items!pokemones_wild_item_common_fkey(*),
            wild_item_uncommon: items!pokemones_wild_item_uncommon_fkey(*),
            wild_item_rare: items!pokemones_wild_item_rare_fkey(*),
            type_1: types!pokemones_type_1_fkey(*),
            type_2: types!pokemones_type_2_fkey(*)
        `);

	if (id) query = query.eq("id", id);
	if (pokedex_number) query = query.eq("pokedex_number", pokedex_number);

	const { data, error } = await query.maybeSingle();

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
