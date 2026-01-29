declare global {
	///////////////////////////////////////////////////////////////////////
	// Tablas de referencia (sin FK)
	///////////////////////////////////////////////////////////////////////

	type Type = {
		id: string;
		name: string;
	};

	type AbilityFlag = {
		id: string;
		name: string;
		description: string | null;
	};

	type Ability = {
		id: string;
		name: string;
		description: string;
		flags: AbilityFlag | null;
	};

	type MoveCategory = {
		id: string;
		name: string;
		description: string | null;
	};

	type MoveFlag = {
		id: string;
		name: string;
		description: string | null;
	};

	type MoveFunctionCode = {
		id: string;
		name: string;
	};

	type MoveTarget = {
		id: string;
		name: string;
		description: string | null;
	};

	type ItemPocket = {
		id: number;
		name: string;
		description: string | null;
	};

	type ItemBattleUse = {
		id: string;
		name: string;
		description: string | null;
	};

	type ItemFieldUse = {
		id: string;
		name: string;
		description: string | null;
	};

	type ItemFlag = {
		id: string;
		name: string;
		description: string | null;
	};

	type PokemonCategory = {
		id: string;
		name: string;
		description: string | null;
	};

	type PokemonColor = {
		id: string;
		name: string;
		description: string | null;
	};

	type PokemonEggGroup = {
		id: string;
		name: string;
		description: string | null;
	};

	type PokemonEvolutionMethod = {
		id: string;
		name: string;
		description: string | null;
	};

	type PokemonFlag = {
		id: string;
		name: string;
		description: string | null;
	};

	type PokemonGenderRatio = {
		id: string;
		name: string;
		description: string | null;
		percentage: number | null;
	};

	type PokemonGrowthRate = {
		id: string;
		name: string;
		description: string | null;
	};

	type PokemonHabitat = {
		id: string;
		name: string;
		description: string | null;
	};

	type PokemonShape = {
		id: string;
		name: string;
		description: string | null;
	};

	type PokemonStat = {
		id: string;
		name: string;
		description: string | null;
	};

	///////////////////////////////////////////////////////////////////////
	// Tablas con FK
	///////////////////////////////////////////////////////////////////////

	type Move = {
		id: string;
		name: string;
		type: Type | null;
		category: MoveCategory | null;
		power: number | null;
		accuracy: number | null;
		total_pp: number | null;
		target: MoveTarget | null;
		priority: number | null;
		function_code: MoveFunctionCode | null;
		effect_chance: number | null;
		description: string | null;
	};

	type Item = {
		id: string;
		name: string;
		pocket: ItemPocket | null;
		price: number | null;
		sell_price: number | null;
		battle_points_price: number | null;
		field_use: ItemFieldUse | null;
		battle_use: ItemBattleUse | null;
		consumable: boolean | null;
		move: Move | null;
		description: string | null;
	};

	type Pokemon = {
		id: string;
		name: string;
		pokedex_number: number;
		type_1: Type | null;
		type_2: Type | null;
		ability_1: Ability | null;
		ability_2: Ability | null;
		hidden_ability: Ability | null;
		hp: number | null;
		speed: number | null;
		attack: number | null;
		defense: number | null;
		sp_attack: number | null;
		sp_defense: number | null;
		catch_rate: number | null;
		happiness: number | null;
		height: number | null;
		weight: number | null;
		pokedex: string | null;
		generation: number;
		gender_ratio: PokemonGenderRatio | null;
		growth_rate: PokemonGrowthRate | null;
		base_exp: number | null;
		hatch_steps: number | null;
		incense: Item | null;
		color: PokemonColor | null;
		shape: PokemonShape | null;
		habitat: PokemonHabitat | null;
		category: PokemonCategory | null;
		wild_item_common: Item | null;
		wild_item_uncommon: Item | null;
		wild_item_rare: Item | null;
	};

	///////////////////////////////////////////////////////////////////////
	// Tablas de relación muchos a muchos
	///////////////////////////////////////////////////////////////////////

	type ItemsItemFlags = {
		item_id: Item;
		flag_id: ItemFlag;
	};

	type MovesMoveFlags = {
		move_id: Move;
		flag_id: MoveFlag;
	};

	type PokemonEffortValue = {
		pokemon_id: Pokemon;
		pokemon_stat_id: PokemonStat;
		value: number;
	};

	type PokemonOffspring = {
		pokemon_id: Pokemon;
		pokemon_offspring_id: Pokemon;
	};

	type PokemonPokemonEggGroup = {
		pokemon_id: Pokemon;
		pokemon_egg_group_id: PokemonEggGroup;
	};

	type PokemonPokemonFlag = {
		pokemon_id: Pokemon;
		flag_id: PokemonFlag;
		parameter: number | null;
	};
}

export {};
