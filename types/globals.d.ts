declare global {
	type POKEMON_STATS = {
		hp: number;
		attack: number;
		defense: number;
		special_attack: number;
		special_defense: number;
		speed: number;
	};

	type POKEMON = {
		id: number;
		name: string;
		types: string[];
		stats: POKEMON_STATS;
	};
}

export {};
