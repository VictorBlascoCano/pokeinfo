import Image from "next/image";

const Home = () => {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-5xl font-bold">Pokemon Azur Wiki</h1>
			<Image src="/map.webp" alt="map" width={1200} height={1200} />
		</div>
	);
};

export default Home;
