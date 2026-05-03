"use client";

import { motion } from "framer-motion";

export default function BackgroundTiles() {
    return (
        <div className="outerSpace pointer-events-none">
            <motion.div
                initial={{ rotateX: 60, rotateZ: 20 }}
                animate={{ rotateX: 50, rotateZ: 25 }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
                className="tileContainer"
            >
                {[...Array(800)].map((_, i) => (
                    <div key={i} className="tile" />
                ))}
            </motion.div>
        </div>
    );
}