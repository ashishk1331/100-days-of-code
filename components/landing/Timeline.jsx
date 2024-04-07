import Tree from "/public/tree_proto.jpg";
import Folder from "/public/folder_structure.png";
import Image from "next/image";

export default function Example() {
	return (
		<>
			{/* Blog Article */}
			<div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto mt-24">
				<div className="max-w-2xl">
					{/* Content */}
					<div className="space-y-5 md:space-y-8">
						<div className="space-y-3">
							<h2 className="text-2xl font-bold md:text-3xl">
								The Roadmap
							</h2>
							<p className="text-lg text-gray-800">
								Have a seat, grab a coffee, and let's talk about
								this awfully exciting journey we'll be on. Yes,
								a journey that will last for 100 days and we'll
								be travelling through the valleys of JSX, the
								yards of AVL trees, and seasides where
								Nanami-San wanted to be.(JJK reference, anyone?)
							</p>
						</div>
						<p className="text-lg text-gray-800">
							What's the plan?
						</p>
						<p className="text-lg text-gray-800">
							Around a year ago, I came across a tweet from{" "}
							<a
								href="https://twitter.com/mattpocockuk"
								className="text-emerald-600 underline"
							>
								Matt
							</a>
							, the urban TS legend, where he wrote about an
							exercise of building a christmas tree using
							recursion in React. Well, he did that in Vue.
							However, I thought why not merge these two genres
							together and bring forth a symphony that can really
							help others visualize the concepts and{" "}
							<mark className="bg-emerald-200">for real</mark>{" "}
							gain the wisdom.
						</p>
						<figure>
							<Image
								className="w-full object-cover rounded-xl"
								src={Tree}
								alt="Christmas Tree problem"
							/>
							<figcaption className="mt-3 text-sm text-center text-gray-500">
								The Christmas Tree generated using recursive
								functions in react.
							</figcaption>
						</figure>
						<p className="text-lg text-gray-800">
							Still not convinced? Well, let me show you another
							example. This time, we'll be creating a folder
							structure using the recursion. There are a plethora
							of such visual structures that you see everyday and
							we'll be creating them all. Yay!
						</p>
						<p className="text-lg text-gray-800">
							Why not you try it and ping me back,{" "}
							<a
								href="https://twitter.com/AshishK1331"
								className="text-emerald-600 underline"
							>
								ashishk
							</a>{" "}
							I would love to see how you create it.
						</p>
						<figure>
							<Image
								className="w-full object-cover rounded-xl"
								src={Folder}
								alt="Christmas Tree problem"
							/>
							<figcaption className="mt-3 text-sm text-center text-gray-500">
								The Christmas Tree generated using recursive
								functions in react.
							</figcaption>
						</figure>
						<p className="text-lg text-gray-800">
							Now, if you feel interested and want to learn more
							about the concepts, then let's dive in and get you
							signed up. BTW form is attached just below somewhere
							near, check it out!
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
