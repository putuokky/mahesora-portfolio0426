// import { MessageCircle, Mail } from 'lucide-react';
import { Github, MessageCircle, Linkedin, Mail } from 'lucide-react';
import { MinimalistProgrammerLinktree, LinkItem } from "@/components/minimalist-programmer-linktree";

export default function Home() {
  const name = "Okky Maheswara";
  const role = "Full Stack Developer | Data Science Enthusiast";
  const pictureUrl = 'https://avatars.githubusercontent.com/u/47545776?v=4';

  const links: LinkItem[] = [
    { name: 'LinkedIn', icon: <Linkedin />, url: 'https://www.linkedin.com/in/okkymahesora/' },
    { name: 'GitHub', icon: <Github />, url: 'https://github.com/putuokky' },
    { name: 'WhatsApp', icon: <MessageCircle />, url: 'https://wa.me/6287883393901' },
    { name: 'Email', icon: <Mail />, url: 'mailto:okkymahes@gmail.com' },
  ];

  return (
    <MinimalistProgrammerLinktree
      name={name}
      role={role}
      pictureUrl={pictureUrl}
      links={links}
    />
  );
}