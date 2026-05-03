"use client";

export default function BackgroundTiles() {
    return (
        <div className="outerSpace pointer-events-none">
            <div className="tileContainer">
                {[...Array(800)].map((_, i) => (
                    <div key={i} className="tile" />
                ))}
            </div>
        </div>
    );
}