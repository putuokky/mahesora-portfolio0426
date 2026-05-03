"use client";

import { useEffect, useRef } from "react";

type Point = {
    x: number;
    y: number;
};

export default function CursorTrail() {
    const points = useRef<Point[]>([]);
    const rafId = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            points.current.unshift({ x: e.clientX, y: e.clientY });

            if (points.current.length > 15) {
                points.current.pop();
            }

            if (!rafId.current) {
                rafId.current = requestAnimationFrame(render);
            }
        };

        const render = () => {
            if (!containerRef.current) return;

            const children = containerRef.current.children;

            points.current.forEach((p, i) => {
                const el = children[i] as HTMLElement;
                if (!el) return;

                el.style.transform = `translate(${p.x}px, ${p.y}px)`;
            });

            rafId.current = null;
        };

        window.addEventListener("mousemove", move);

        return () => {
            window.removeEventListener("mousemove", move);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="pointer-events-none fixed inset-0 z-9999"
        >
            {Array.from({ length: 15 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute left-0 top-0 rounded-full"
                    style={{
                        width: i === 0 ? 10 : 6,
                        height: i === 0 ? 10 : 6,
                        background: i === 0 ? "white" : "rgba(255,255,255,0.3)",
                        transform: "translate(-999px,-999px)",
                        transition: "transform 0.1s linear",
                    }}
                />
            ))}
        </div>
    );
}