import { MinimalistProgrammerLinktree, LinkItem } from "@/components/minimalist-programmer-linktree";
import { links } from "@/data/links";
import { iconMap } from "@/data/iconMap";
import ClientBackground from "@/components/ClientBackground";

export default function Home() {
  const name = "Okky Maheswara";
  const role = "Full Stack Developer | Data Science Enthusiast";
  const pictureUrl = 'https://avatars.githubusercontent.com/u/47545776?v=4';

  const mappedLinks: LinkItem[] = links.map((link) => {
    const iconConfig = iconMap[link.icon as keyof typeof iconMap];

    if (!iconConfig) return link;

    const Icon = iconConfig.component;

    return {
      ...link,
      icon: (
        <Icon className={`h-6 w-6 ${iconConfig.className} transition-transform duration-200 hover:scale-110`} />
      ),
    };
  });

  return (
    <div className="relative min-h-screen">

      <ClientBackground />

      <div className="relative z-10">
        <MinimalistProgrammerLinktree
          name={name}
          role={role}
          pictureUrl={pictureUrl}
          links={mappedLinks}
        />
      </div>

    </div>
  );
}