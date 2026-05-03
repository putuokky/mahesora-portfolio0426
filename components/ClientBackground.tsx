"use client";

import dynamic from "next/dynamic";

const BackgroundTiles = dynamic(
    () => import("./BackgroundTiles"),
    { ssr: false }
);

export default function ClientBackground() {
    return <BackgroundTiles />;
}