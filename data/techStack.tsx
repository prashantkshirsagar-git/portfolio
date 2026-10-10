import { TechStackItem } from '@/types';

const TechIcon = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => (
  <img 
    src={src} 
    alt={alt} 
    className={`w-4 h-4 object-contain ${className}`} 
    loading="lazy"
  />
);

export const techStack: TechStackItem[] = [
  // --- Frontend ---
  { 
    name: "React", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /> 
  },
  { 
    name: "JavaScript", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /> 
  },
  { 
    name: "HTML5", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" /> 
  },
  { 
    name: "CSS3", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" /> 
  },
  { 
    name: "Tailwind", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" /> 
  },
  { 
    name: "Redux", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux Toolkit" /> 
  },

  // --- Backend ---
  { 
    name: "Node.js", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" /> 
  },
  { 
    name: "Express.js", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="dark:invert" /> 
  },

  // --- Databases & Other ---
  { 
    name: "PostgreSQL", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" /> 
  },
  { 
    name: "MongoDB", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" /> 
  },
  { 
    name: "Firebase", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" /> 
  },
  { 
    name: "SQL", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" /> 
  },
  { 
    name: "Git", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" /> 
  },
  { 
    name: "Docker", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" /> 
  },
  { 
    name: "Figma", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" /> 
  },
];