import { motion } from "framer-motion";

export default function TopSheet() {
    const animation = {
        initial: {
            y: -20,
            opacity: 0.6,
        },
        animate: {
            y: 0,
            opacity: 1,
        },
    };
    return (
        <motion.div
            {...animation}
            className="absolute inset-x-0 top-0 w-fit flex flex-wrap gap-3 items-center p-4 px-8 m-4 mx-auto rounded bg-violet-50 border-2 border-violet-300"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-violet-600 w-5 h-5"
                viewBox="0 0 256 256"
            >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
            Image copied to clipboard.
        </motion.div>
    );
}
