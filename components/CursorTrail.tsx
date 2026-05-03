"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function CursorTrail() {
    const isMobile = useIsMobile();

    const isLowEnd =
        typeof navigator !== "undefined" &&
        (navigator.hardwareConcurrency || 4) <= 4;

    const disabled = isMobile || isLowEnd;

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const smoothX = useSpring(x, {
        stiffness: 300,
        damping: 30,
    });

    const smoothY = useSpring(y, {
        stiffness: 300,
        damping: 30,
    });

    // ✅ HOOK SELALU DIPANGGIL (WAJIB)
    useEffect(() => {
        if (disabled) return; // guard di dalam effect, bukan skip hook

        let lastTime = 0;

        const handleMove = (e: MouseEvent) => {
            const now = performance.now();
            if (now - lastTime < 8) return;
            lastTime = now;

            x.set(e.clientX);
            y.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMove);

        return () => window.removeEventListener("mousemove", handleMove);
    }, [x, y, disabled]);

    // ✅ render guard di sini (boleh)
    if (disabled) return null;

    const TRAIL_COUNT = 10;

    return (
        <div className="pointer-events-none fixed inset-0 z-50">
            {[...Array(TRAIL_COUNT)].map((_, i) => {
                const size = 10 - i * 0.7;
                const opacity = Math.pow(1 - i / TRAIL_COUNT, 2);
                const blur = i === 0 ? "none" : `blur(${i * 2}px)`;

                return (
                    <motion.div
                        key={i}
                        style={{
                            x: smoothX,
                            y: smoothY,
                        }}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                    >
                        <div
                            className="rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500"
                            style={{
                                width: size,
                                height: size,
                                opacity,
                                filter: blur,
                            }}
                        />
                    </motion.div>
                );
            })}
        </div>
    );
}