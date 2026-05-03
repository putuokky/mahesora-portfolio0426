import { Github, Linkedin, Mail } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export const iconMap = {
    linkedin: {
        component: Linkedin,
        className: "text-blue-500",
    },
    github: {
        component: Github,
        className: "text-gray-800 dark:text-white",
    },
    whatsapp: {
        component: WhatsAppIcon,
        className: "text-green-500",
    },
    email: {
        component: Mail,
        className: "text-red-500",
    },
};