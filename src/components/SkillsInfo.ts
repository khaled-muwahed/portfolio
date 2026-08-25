export type SkillGroup = {
  category: string;
  skills: string[];
};

export const SkillsInfo: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Next.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "NestJS", "REST APIs"],
  },
  {
    category: "Data",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Cloud & Tools",
    skills: ["AWS", "Stripe"],
  },
];
