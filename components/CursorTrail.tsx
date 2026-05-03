"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const TRAIL_COUNT = 12;

export default function CursorTrail() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth follow
    const smoothX = useSpring(x, {
        stiffness: 300,
        damping: 30,
    });

    const smoothY = useSpring(y, {
        stiffness: 300,
        damping: 30,
    });

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [x, y]);

    return (
        <div className="pointer-events-none fixed inset-0 z-50">
            {[...Array(TRAIL_COUNT)].map((_, i) => {
                const size = 10 - i * 0.6;
                const opacity = 1 - i * 0.08;

                return (
                    <motion.div
                        key={i}
                        style={{
                            x: smoothX,
                            y: smoothY,
                        }}
                        transition={{
                            delay: i * 0.03,
                            ease: "easeOut",
                        }}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                    >
                        <div
                            className="rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500"
                            style={{
                                width: size,
                                height: size,
                                opacity,
                                filter: i === 0 ? "none" : "blur(6px)",
                            }}
                        />
                    </motion.div>
                );
            })}
        </div>
    );
}