import FeaturedNews from "@/components/FeaturedNews";
import PokemonOfTheDay from "@/components/PokemonOfTheDay";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Home = () => {
	return (
		<div className="flex flex-col gap-6">
			<section className="relative w-full h-96 rounded overflow-hidden">
				<Image
					src="/banner.webp"
					alt="pokemon banner"
					fill
					className="object-cover opacity-75"
				/>
				<div className="absolute inset-0 p-8">
					<h2 className="[text-shadow:1px_1px_0_#000,-1px_1px_0_#000,1px_-1px_0_#000,-1px_-1px_0_#000] text-white text-6xl font-bold mb-2">
						Welcome to{" "}
						<span className="text-yellow-300">Pokémon Azur</span>!
					</h2>
					<p className="[text-shadow:1px_1px_0_#000,-1px_1px_0_#000,1px_-1px_0_#000,-1px_-1px_0_#000] text-white text-xl">
						The most comprehensive encyclopedia for trainers.
					</p>
					<p className="[text-shadow:1px_1px_0_#000,-1px_1px_0_#000,1px_-1px_0_#000,-1px_-1px_0_#000] text-white text-xl">
						Explore over +1000 pokémon, items, routes an more!
					</p>
				</div>
			</section>
			<div className="flex gap-8 h-140">
				<div className="w-1/3 h-full">
					<PokemonOfTheDay />
				</div>
				<div className="w-2/3 h-full">
					<FeaturedNews />
				</div>
			</div>
			<section className="bg-yellow-300 p-6 rounded-lg text-black flex items-center gap-30 h-35">
				<div>
					<h2 className="text-xl font-bold">Join the Community</h2>
					<p>
						Sign up for our newsletter to get the latest Pokémon
						news, strategy guides, and wiki updates directly to your
						inbox.
					</p>
				</div>
				<div className="flex gap-2">
					<Input
						type="email"
						placeholder="Enter your email"
						className="bg-white! w-80"
					/>
					<Button variant="secondary">Subscribe</Button>
				</div>
			</section>
		</div>
	);
};

export default Home;
