import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Contacts } from "@/components/Contacts";
import Divider from "@/components/ui/Divider";

export default function Home() {
  return (
    <main className="max-w-204 mx-auto px-6 pb-12 space-y-10">
      <Hero />
      <Divider />

      <TechStack />
      <Divider />

      <Education />
      <Divider />

      <Projects />
      <Divider />

      <Contacts />
    </main>
  );
}

