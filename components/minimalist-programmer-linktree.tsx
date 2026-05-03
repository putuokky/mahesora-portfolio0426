"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import LinkCard from "./LinkCard";

export type LinkItem = {
    name: string;
    icon: React.ReactNode;
    url: string;
};

type Props = {
    name: string;
    role: string;
    pictureUrl: string;
    links: LinkItem[];
};

/* ================= ANIMATION ================= */

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

const profileAnim: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export function MinimalistProgrammerLinktree({
    name,
    role,
    pictureUrl,
    links,
}: Props) {
    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
            <motion.div
                initial="hidden"
                animate="show"
                variants={container}
                className="text-center w-full max-w-md mx-auto space-y-5"
            >
                {/* PROFILE */}
                <motion.div
                    variants={profileAnim}
                    className="flex flex-col items-center mb-6"
                >
                    <div className="w-28 h-28 rounded-full p-0.5 bg-linear-to-tr from-blue-500 to-purple-500 mb-4">
                        <div className="w-full h-full rounded-full overflow-hidden bg-black">
                            <Image
                                src={pictureUrl}
                                alt={name}
                                width={112}
                                height={112}
                                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                priority
                            />
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold tracking-wide">{name}</h1>
                    <p className="text-white/60">{role}</p>
                </motion.div>

                {/* LINKS */}
                <motion.div variants={container} className="space-y-3">
                    {links.map((link, index) => (
                        <motion.div key={index} variants={item}>
                            <LinkCard {...link} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </main>
    );
}