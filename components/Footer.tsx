import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { XformerlyTwitter } from "@/icons/x";
import { YouTube } from "@/icons/youtube";
import Link from "next/link";

const Footer = () => {
	return (
		<>
			<Separator />
			<footer className="flex justify-between items-center gap-4 px-4 text-gray-400 w-full max-w-6xl mx-auto h-50 sm:h-15">
				<p>© 2026 PokeWiki. Fan made site.</p>
				<ul className="flex flex-col sm:flex-row gap-2 sm:gap-8 list-disc sm:list-none">
					<li>Privacy Policy</li>
					<li>Terms of Service</li>
					<li>Contact</li>
				</ul>
				<ul className="flex flex-col sm:flex-row gap-6 sm:gap-4">
					<li>
						<Button variant="outline" asChild>
							<Link
								href="https://x.com/pkmn_azur"
								target="_blank"
								rel="noopener noreferrer"
							>
								<XformerlyTwitter />
							</Link>
						</Button>
					</li>
					<li>
						<Button variant="outline" asChild>
							<Link
								href="https://www.youtube.com/@pkmn_azur"
								target="_blank"
								rel="noopener noreferrer"
							>
								<YouTube />
							</Link>
						</Button>
					</li>
				</ul>
			</footer>
		</>
	);
};

export default Footer;
