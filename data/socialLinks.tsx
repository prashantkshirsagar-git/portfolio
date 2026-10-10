import {
  GithubLogo,
  LinkedinLogo,
  Envelope,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/prashantkshirsagar-git",
    icon: <GithubLogo size={21} weight="regular" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prashant-kshirsagar-379939420/",
    icon: <LinkedinLogo size={21} weight="regular" />,
  },
  {
    name: "Email",
    url: "mailto:prashantkshirsagar.dev@gmail.com",
    icon: <Envelope size={21} weight="regular" />,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/918329838647",
    icon: <WhatsappLogo size={21} weight="regular" />,
  },
];