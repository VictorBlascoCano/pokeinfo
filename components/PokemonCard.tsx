"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
	HeartPlusIcon,
	RabbitIcon,
	ShieldIcon,
	ShieldPlusIcon,
	SwordIcon,
	WandSparklesIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import TypePill from "./TypePill";

const PokemonCard = ({
	pokemon: {
		id,
		name,
		type_1,
		type_2,
		hp,
		speed,
		attack,
		defense,
		sp_attack,
		sp_defense,
	},
}: {
	pokemon: Pokemon;
}) => {
	const router = useRouter();

	const pokemon_stats = [
		{
			icon: <HeartPlusIcon />,
			value: hp,
			label: "HP",
		},
		{
			icon: <RabbitIcon />,
			value: speed,
			label: "SPEED",
		},
		{
			icon: <SwordIcon />,
			value: attack,
			label: "ATTACK",
		},
		{
			icon: <ShieldIcon />,
			value: defense,
			label: "DEFENSE",
		},
		{
			icon: <WandSparklesIcon />,
			value: sp_attack,
			label: "SP. ATK",
		},
		{
			icon: <ShieldPlusIcon />,
			value: sp_defense,
			label: "SP. DEF",
		},
	];

	return (
		<Button
			className="bg-sidebar rounded-lg h-40 border border-sidebar-border text-gray-400 flex flex-col overflow-hidden"
			variant="secondary"
			onClick={() => router.push(`/pokemon/${id}`)}
		>
			<div className="flex items-center gap-2 w-full text-lg font-bold relative">
				<span className="w-15 text-start">{`#${id}`}</span>
				<span className="absolute inset-x-0 text-center uppercase">
					{name}
				</span>
			</div>
			<div className="w-full h-full flex items-center gap-2">
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
					alt={`${name} sprite image`}
					width={100}
					height={100}
					className="h-25 w-auto"
				/>
				<div className="w-full h-full flex flex-col justify-between">
					<div className="w-full flex justify-around gap-2 mb-2">
						{type_1 && <TypePill type={type_1} />}
						{type_2 && <TypePill type={type_2} />}
					</div>
					<div className="flex-1 grid grid-cols-2 grid-rows-3">
						{pokemon_stats.map((stat) => (
							<HoverCard key={stat.label}>
								<HoverCardTrigger asChild>
									<div className="flex items-center gap-2">
										{stat.icon}
										<span>{stat.value}</span>
									</div>
								</HoverCardTrigger>
								<HoverCardContent className="max-w-max whitespace-nowrap">
									{stat.label}
								</HoverCardContent>
							</HoverCard>
						))}
					</div>
				</div>
			</div>
		</Button>
	);
};

export default PokemonCard;
