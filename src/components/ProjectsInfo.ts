export type ProjectData = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  status?: string;
};

export const ProjectsInfo: ProjectData[] = [
  {
    id: "wait-less",
    title: "Wait-Less",
    description:
      "A restaurant management system I co-built with another developer and deployed into real restaurant environments. It helps front-of-house and kitchen teams stay in sync, with features for managing orders and tracking their progress in real time.",
    technologies: ["React", "TypeScript", "NestJS", "MongoDB"],
    github: "",
    demo: "",
    status: "Production",
    image: "/project/wait-less.png",
  },
  {
    id: "baklava-bliss",
    title: "Baklava Bliss",
    description:
      "A full-stack e-commerce platform built from the ground up, covering everything from the React storefront to the backend API and database. I also integrated Stripe Checkout and webhooks to handle the payment flow and deployed the application using Vercel and Railway.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Stripe"],
    github: "https://github.com/khaled-muwahed/baklava-web",
    demo: "https://baklava.vercel.app/",
    status: "Completed",
    image: "/project/baklava-bliss.png",
  },
  {
    id: "velolink",
    title: "VeloLink",
    description:
      "An on-demand vehicle recovery marketplace connecting customers who need roadside assistance with independent recovery drivers. Customers can enter their vehicle and recovery details, receive a price estimate and pay a deposit online, while an admin dashboard handles driver assignment.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "",
    demo: "",
    status: "In progress",
  },
];
