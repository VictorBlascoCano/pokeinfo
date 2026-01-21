"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import TypePill from "@/components/TypePill";

const PokemonCard = ({
	pokemon: { id, name, type_1, type_2 },
}: {
	pokemon: Pokemon;
}) => {
	const router = useRouter();

	return (
		<Button
			className="bg-sidebar rounded-lg p-4 h-full border border-sidebar-border text-gray-400 flex flex-col overflow-hidden"
			variant="secondary"
			onClick={() => router.push(`/pokemon/${id}`)}
		>
			<div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-2 w-full text-lg font-bold">
				<span className="uppercase">{name}</span>
				<span>{`#${id}`}</span>
			</div>
			<div className="w-full h-full flex flex-col sm:flex-row items-center gap-2">
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
					alt={`${name} sprite image`}
					width={100}
					height={100}
					className="w-full h-full object-contain"
				/>
				<div className="flex xl:flex-col gap-2">
					{type_1 && <TypePill type={type_1} />}
					{type_2 && <TypePill type={type_2} />}
				</div>
			</div>
		</Button>
	);
};

export default PokemonCard;
