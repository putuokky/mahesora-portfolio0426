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
            <div className="text-center w-full max-w-md mx-auto space-y-6">

                {/* ================= PROFILE ================= */}
                <div className="flex flex-col items-center">

                    {/* Avatar Premium */}
                    <div className="relative mb-4">
                        {/* Glow */}
                        <div className="absolute inset-0 rounded-full blur-xl bg-linear-to-tr from-blue-500/30 to-purple-500/30 opacity-70" />

                        {/* Gradient Border */}
                        <div className="relative w-28 h-28 rounded-full p-0.5 bg-linear-to-tr from-blue-500 to-purple-500">
                            <div className="w-full h-full rounded-full overflow-hidden bg-black">
                                <Image
                                    src={pictureUrl}
                                    alt={name}
                                    width={112}
                                    height={112}
                                    className="object-cover w-full h-full rounded-full transition-all duration-500 hover:scale-110"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Name */}
                    <h1 className="text-2xl font-bold tracking-tight bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent">
                        {name}
                    </h1>

                    {/* Role */}
                    <p className="text-white/50 text-sm mt-1">
                        {role}
                    </p>
                </div>

                {/* ================= LINKS ================= */}
                <div className="space-y-4">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            className="group relative flex items-center justify-between rounded-2xl px-5 py-4 bg-linear-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-white/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
                        >
                            {/* Glow hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-linear-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-xl" />

                            {/* Content */}
                            <div className="flex items-center gap-3 relative z-10">
                                <span className="flex items-center justify-center text-white/70 group-hover:text-white transition">
                                    {link.icon}
                                </span>
                                <span>{link.name}</span>
                            </div>

                            <span className="text-gray-500 relative z-10">›</span>
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
}