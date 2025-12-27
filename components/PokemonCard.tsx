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
import { TYPE_STYLES } from "@/data/data";
import { useRouter } from "next/navigation";

const PokemonCard = ({
	pokemon: { id, name, types, stats },
}: {
	pokemon: Pokemon;
}) => {
	const router = useRouter();

	const pokemon_stats = [
		{
			icon: <HeartPlusIcon />,
			value: stats.find((stat) => stat.stat.name === "hp")?.base_stat,
			label: "HP",
		},
		{
			icon: <RabbitIcon />,
			value: stats.find((stat) => stat.stat.name === "speed")?.base_stat,
			label: "SPEED",
		},
		{
			icon: <SwordIcon />,
			value: stats.find((stat) => stat.stat.name === "attack")?.base_stat,
			label: "ATTACK",
		},
		{
			icon: <ShieldIcon />,
			value: stats.find((stat) => stat.stat.name === "defense")
				?.base_stat,
			label: "DEFENSE",
		},
		{
			icon: <WandSparklesIcon />,
			value: stats.find((stat) => stat.stat.name === "special-attack")
				?.base_stat,
			label: "SP. ATK",
		},
		{
			icon: <ShieldPlusIcon />,
			value: stats.find((stat) => stat.stat.name === "special-defense")
				?.base_stat,
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
				<span className="absolute inset-x-0 text-center">
					{name.toUpperCase()}
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
					<div className="w-full flex justify-around mb-2">
						{types.map(({ type: { name } }) => {
							const style = TYPE_STYLES[name] ?? {
								bg: "#374151",
								text: "#ffffff",
							};
							return (
								<span
									key={name}
									className="font-bold px-2 py-0.5 rounded-lg"
									style={{
										backgroundColor: style.bg,
										color: style.text,
									}}
								>
									{name.toUpperCase()}
								</span>
							);
						})}
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
