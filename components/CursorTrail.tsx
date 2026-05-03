"use client";

import { useEffect, useState } from "react";
import { useMotionValue } from "framer-motion";

type Point = {
    x: number;
    y: number;
};

export default function CursorTrail() {
    // ✅ hooks SELALU di atas
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [points, setPoints] = useState<Point[]>([]);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            setPoints((prev) => [
                { x: e.clientX, y: e.clientY },
                ...prev.slice(0, 10), // limit trail
            ]);
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, [mouseX, mouseY]);

    return (
        <div className="pointer-events-none fixed inset-0 z-9999">
            {points.map((p, i) => {
                const isCore = i === 0;

                return (
                    <div
                        key={i}
                        className={`absolute rounded-full ${isCore ? "w-3 h-3 bg-white" : "w-2 h-2 bg-white/40"
                            }`}
                        style={{
                            left: p.x,
                            top: p.y,
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                );
            })}
        </div>
    );
}