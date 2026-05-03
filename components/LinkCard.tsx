"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
    name: string;
    icon: React.ReactNode;
    url: string;
};

export default function LinkCard({ name, icon, url }: Props) {
    // ✅ Hooks di top level (VALID)
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const smoothX = useSpring(rotateX, {
        stiffness: 150,
        damping: 15,
    });

    const smoothY = useSpring(rotateY, {
        stiffness: 150,
        damping: 15,
    });

    return (
        <motion.a
            href={url}
            target="_blank"
            style={{
                rotateX: smoothX,
                rotateY: smoothY,
                transformPerspective: 800,
            }}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();

                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                rotateX.set(((y - centerY) / centerY) * -6);
                rotateY.set(((x - centerX) / centerX) * 6);
            }}
            onMouseLeave={() => {
                rotateX.set(0);
                rotateY.set(0);
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
        group relative flex items-center justify-between
        px-4 py-3 rounded-xl
        border border-white/10
        bg-white/5 backdrop-blur-xl
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        overflow-hidden transition
      "
        >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="w-full h-full bg-linear-to-r from-blue-500/10 via-transparent to-purple-500/10 blur-xl" />
            </div>

            <div className="flex items-center gap-3 z-10">
                <span>{icon}</span>
                <span>{name}</span>
            </div>

            <span className="text-white/40 z-10 group-hover:translate-x-1 transition">
                ›
            </span>
        </motion.a>
    );
}