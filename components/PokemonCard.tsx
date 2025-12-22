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

const PokemonCard = () => {
	const stats = [
		{ icon: <HeartPlusIcon />, value: 102, label: "HP" },
		{ icon: <RabbitIcon />, value: 90, label: "SPEED" },
		{ icon: <SwordIcon />, value: 102, label: "ATTACK" },
		{ icon: <ShieldIcon />, value: 76, label: "DEFENSE" },
		{ icon: <WandSparklesIcon />, value: 102, label: "SP. ATK" },
		{ icon: <ShieldPlusIcon />, value: 132, label: "SP. DEF" },
	];

	return (
		<Button
			className="bg-sidebar rounded-lg h-40 border border-sidebar-border text-gray-400 flex flex-col"
			variant="secondary"
		>
			<div className="flex items-center gap-2 w-full text-lg font-bold relative">
				<span className="w-15 text-start">#1000</span>
				<span className="absolute inset-x-0 text-center">PIKACHU</span>
			</div>
			<div className="w-full h-full flex items-center gap-2">
				<Image
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
					alt="Pikachu image"
					width={100}
					height={100}
					className="h-25 w-auto"
				/>
				<div className="w-full h-full flex flex-col justify-between">
					<div className="w-full flex justify-around mb-2">
						<span className="font-bold bg-purple-700 px-2 py-0.5 rounded-lg text-black">
							POISON
						</span>
						<span className="font-bold bg-purple-900 px-2 py-0.5 rounded-lg">
							GHOST
						</span>
					</div>
					<div className="flex-1 grid grid-cols-2 grid-rows-3">
						{stats.map((s, i) => (
							<HoverCard key={i}>
								<HoverCardTrigger asChild>
									<div className="flex items-center gap-2">
										{s.icon}
										<span>{s.value}</span>
									</div>
								</HoverCardTrigger>
								<HoverCardContent className="max-w-max whitespace-nowrap">
									{s.label}
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
