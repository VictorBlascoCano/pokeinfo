"use client";

import { useParams } from "next/navigation";

const Pokemon = () => {
	const { id } = useParams();
	return <div>{id}</div>;
};

export default Pokemon;
