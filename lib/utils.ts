import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const capitalize = (s: string) =>
	s ? s[0].toUpperCase() + s.slice(1) : s;

export const fetchPokemon = async () => {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151"); // force-cache default
	if (!res.ok) throw new Error("NO POKEMON");

	const { results: resources } = await res.json();

	const urls = resources.map((item: NamedResources) => item.url);

	const data = await Promise.all(
		urls.map((url: string) => fetch(url).then((res) => res.json()))
	);

	return data;
};
