import Link from "next/link";
import News from "./News";

const FeaturedNews = () => {
	return (
		<section className="flex flex-col gap-4 h-full">
			<div className="flex items-center">
				<h2 className="text-2xl font-bold text-white">Featured News</h2>{" "}
				<Link
					href="/news"
					className="ml-auto font-bold text-yellow-200 hover:text-yellow-300"
				>
					View All
				</Link>
			</div>
			<div className="flex flex-col gap-4 h-full">
				<News />
				<News />
				<News />
			</div>
		</section>
	);
};

export default FeaturedNews;
