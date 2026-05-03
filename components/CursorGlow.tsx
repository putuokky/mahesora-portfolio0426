"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // smoothing biar “mahal”
    const smoothX = useSpring(x, { damping: 25, stiffness: 150 });
    const smoothY = useSpring(y, { damping: 25, stiffness: 150 });

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-30"
            onMouseMove={(e) => {
                x.set(e.clientX - 120);
                y.set(e.clientY - 120);
            }}
        >
            <motion.div
                style={{ translateX: smoothX, translateY: smoothY }}
                className="w-60 h-60 rounded-full bg-blue-500/20 blur-3xl"
            />
        </motion.div>
    );
}