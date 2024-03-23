"use client";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function (props) {
	const [open, setOpen] = useState(false);
	const animate = {
		initial: { opacity: 0.6 },
		animate: { opacity: 1 },
		exit: { opacity: 0.6 },
		transition: { duration: 0.3, ease: "easeInOut" },
	};

	function handleClick() {
		setOpen((prev) => !prev);
	}

	return (
		<header className="fixed inset-0 h-fit bg-white/40 backdrop-blur border border-gray-200 rounded-lg m-4 z-50">
			<div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between text-gray-900">
				<span className="text-sm sm:text-center dark:text-gray-400">
					© 2024{" "}
					<a href="#first" className="hover:underline">
						Proxy Club™
					</a>
					. All Rights Reserved.
				</span>

				<div className="hidden md:block">
					<List />
				</div>
				<button className="p-2 my-auto md:hidden" onClick={handleClick}>
					{open ? (
						<XMarkIcon className="w-4 h-4" />
					) : (
						<Bars2Icon className="w-4 h-4" />
					)}
				</button>
			</div>
			<AnimatePresence>
				{open && (
					<motion.div {...animate} className="w-fit mx-auto p-4">
						<List />
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}

function List(props) {
	return (
		<ul className="flex flex-wrap gap-x-8 items-center mt-3 text-sm sm:mt-0">
			<li>
				<a href="#subscribe" className="hover:underline">
					Subscribe
				</a>
			</li>
			<li>
				<a
					href="https://twitter.com/AshishK1331"
					className="hover:underline"
				>
					Contact
				</a>
			</li>
		</ul>
	);
}
