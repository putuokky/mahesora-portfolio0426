"use client";

import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

type Props = {
    name: string;
    icon: React.ReactNode;
    url: string;
};

export default function LinkCard({ name, icon, url }: Props) {
    // PARALLAX
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-50, 50], [8, -8]);
    const rotateY = useTransform(x, [-50, 50], [-8, 8]);

    const smoothX = useSpring(x, { stiffness: 120, damping: 12 });
    const smoothY = useSpring(y, { stiffness: 120, damping: 12 });

    // LIGHT EFFECT
    const lightX = useTransform(smoothX, [-50, 50], ["0%", "100%"]);
    const lightY = useTransform(smoothY, [-50, 50], ["0%", "100%"]);

    return (
        <motion.a
            href={url}
            target="_blank"
            style={{
                rotateX,
                rotateY,
                transformPerspective: 900,
            }}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const px = e.clientX - rect.left - rect.width / 2;
                const py = e.clientY - rect.top - rect.height / 2;

                x.set(px);
                y.set(py);
            }}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="relative group block"
        >
            {/* 🔥 BORDER GLOW */}
            <div className="absolute inset-0 rounded-xl p-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm" />

            {/* 🔥 MAIN CARD */}
            <motion.div
                style={{
                    background: `radial-gradient(circle at ${lightX} ${lightY}, rgba(255,255,255,0.15), transparent 40%)`,
                }}
                className="
          relative flex items-center justify-between
          px-4 py-3 rounded-xl
          bg-black/60 backdrop-blur-xl
          border border-white/10
          shadow-[0_10px_40px_rgba(0,0,0,0.6)]
          overflow-hidden
        "
            >
                {/* Glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="w-full h-full bg-linear-to-r from-blue-500/10 via-transparent to-purple-500/10 blur-2xl" />
                </div>

                <div className="flex items-center gap-3 z-10">
                    <span className="text-lg">{icon}</span>
                    <span className="font-medium tracking-wide">{name}</span>
                </div>

                <span className="text-white/40 z-10 group-hover:translate-x-1 transition">
                    →
                </span>
            </motion.div>
        </motion.a>
    );
}