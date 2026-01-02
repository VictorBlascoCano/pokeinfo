declare global {
	type Pokemon = {
		id: number;
		name: string;
		height: number;
		weight: number;
		type_1: string;
		type_2: string;
		hp: number;
		speed: number;
		attack: number;
		defense: number;
		sp_attack: number;
		sp_defense: number;
		catch_rate: number;
		happiness: number;
		pokedex: string;
		generation: number;
		evs: string;
		moves: string;
		tutor_moves: string;
		abilities: string;
		hidden_abilities: string;
		evolutions: string;
	};
}

export {};
