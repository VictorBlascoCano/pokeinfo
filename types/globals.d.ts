declare global {
	type Pokemon = {
		id: number;
		name: string;
		height: number;
		weight: number;
		types: string[];
		hp: number;
		speed: number;
		attack: number;
		defense: number;
		sp_attack: number;
		sp_defense: number;
	};
}

export {};
