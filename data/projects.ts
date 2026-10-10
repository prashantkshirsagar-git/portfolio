import { Project } from "@/types";

export const shippedProjects: Project[] = [];

export const personalProjects: Project[] = [
  {
    id: 1,
    name: "Travel AI — AI Trip Planner",
    description:
      "Full-stack AI trip planner using React, Firebase, Gemini AI, and Google Places API that generates personalized travel itineraries based on destination, trip duration, budget, and travel companions. Integrated 5 external services to automate itinerary generation, user authentication, trip storage, and destination imagery.",
    tech: "React.js, Firebase, Gemini AI, Google Places API, Pexels API, Tailwind CSS, shadcn/ui",
    githubUrl: "https://github.com/prashantkshirsagar-git/travel-planner-ai",
    liveUrl: "https://travel-planner-ai-five-xi.vercel.app/",
    thumbnail: "",
  },
  {
    id: 2,
    name: "AI SaaS Platform",
    description:
      "Full-stack AI SaaS platform with AI-powered tools for content generation (Article Generator, Blog Title Generator, Image Generator), image editing (background removal, object removal), and an AI Resume Analyzer. Features secure authentication with Clerk and subscription billing for premium access.",
    tech: "React.js, Node.js, Express.js, PostgreSQL, Clerk, Neon Serverless",
    githubUrl: "https://github.com/prashantkshirsagar-git/ai-service-platform",
    liveUrl: "https://ai-service-platform-client.vercel.app/",
    thumbnail: "",
  },
];