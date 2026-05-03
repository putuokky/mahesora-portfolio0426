"use client";

import Image from "next/image";

export type LinkItem = {
    name: string;
    icon: React.ReactNode;
    url: string;
};

type Props = {
    name: string;
    role: string;
    pictureUrl: string;
    links: LinkItem[];
};

export function MinimalistProgrammerLinktree({
    name,
    role,
    pictureUrl,
    links,
}: Props) {
    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
            <div className="text-center w-full max-w-sm">

                {/* Profile */}
                <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-600 mb-4">
                        <Image
                            src={pictureUrl}
                            alt={name}
                            width={96}
                            height={96}
                            className="object-cover rounded-full transition-transform duration-300 hover:scale-105"
                            priority
                        />
                    </div>

                    <h1 className="text-xl font-semibold">{name}</h1>
                    <p className="text-gray-400 text-sm">{role}</p>
                </div>

                {/* Links */}
                <div className="space-y-3">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            className="flex items-center justify-between bg-zinc-900/80 backdrop-blur px-4 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.02]"
                        >
                            <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition bg-linear-to-r from-purple-500/10 to-blue-500/10" />
                            <div className="flex items-center gap-3">
                                <span className="text-white flex items-center justify-center">{link.icon}</span>
                                <span>{link.name}</span>
                            </div>

                            <span className="text-gray-500">›</span>
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
}