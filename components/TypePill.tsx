import { TYPE_INFO } from "@/data/data";

const TypePill = ({ type }: { type: Type | null }) => {
	if (!type) return null;

	const t = TYPE_INFO[type.id];
	if (!t) return null;

	return (
		<span
			className="w-18 flex justify-center items-center font-bold px-2 py-0.5 rounded-sm uppercase border-t-3"
			style={{
				backgroundColor: t.bg,
				color: t.text,
				borderTopColor: t.borderTop,
			}}
		>
			{type.name}
		</span>
	);
};

export default TypePill;
