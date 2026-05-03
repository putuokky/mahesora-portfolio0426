import { MinimalistProgrammerLinktree, LinkItem } from "@/components/MinimalistProgrammerLinktree";
import { links } from "@/data/links";
import { iconMap } from "@/data/iconMap";
import ClientBackground from "@/components/ClientBackground";
import { profile } from "@/data/profile";
// import CursorGlow from "@/components/CursorGlow";
import CursorTrail from "@/components/CursorTrail";
// import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const mappedLinks: LinkItem[] = links.map((link) => {
    const iconConfig = iconMap[link.icon as keyof typeof iconMap];

    if (!iconConfig) return link;

    const Icon = iconConfig.component;

    return {
      ...link,
      icon: (
        <Icon className={`h-6 w-6 ${iconConfig.className} transition-all duration-200 group-hover:scale-105`} />
      ),
    };
  });

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">

      <CursorTrail />

      {/* <CursorGlow /> */}

      <div className="absolute inset-0 opacity-50">
        <ClientBackground />
      </div>

      <div className="relative z-10">
        <MinimalistProgrammerLinktree
          name={profile.name}
          role={profile.role}
          pictureUrl={profile.pictureUrl}
          links={mappedLinks}
        />
      </div>

    </div>
  );
}