import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  { title: "Frontend", description: "Accessible interfaces, responsive systems, and maintainable component architecture.", skills: [
    { name: "HTML5", level: 95 }, { name: "CSS3", level: 93 }, { name: "JavaScript", level: 90 }, { name: "TypeScript", level: 86 }, { name: "React", level: 88 }, { name: "Next.js", level: 85 }, { name: "Tailwind CSS", level: 91 }
  ]},
  { title: "Backend", description: "Practical APIs, business logic, validation, integrations, and data-aware systems.", skills: [
    { name: "Node.js", level: 82 }, { name: "Express.js", level: 80 }, { name: "PHP", level: 88 }, { name: "REST APIs", level: 87 }
  ]},
  { title: "CMS & Commerce", description: "Editor-friendly websites and dependable commerce experiences.", skills: [
    { name: "WordPress", level: 95 }, { name: "Elementor", level: 96 }, { name: "WooCommerce", level: 91 }
  ]},
  { title: "Data & Programming", description: "Structured data work and cross-discipline programming foundations.", skills: [
    { name: "MySQL", level: 84 }, { name: "MongoDB", level: 76 }, { name: "Python", level: 74 }, { name: "C++", level: 70 }, { name: "VB.NET", level: 67 }
  ]},
  { title: "Tools", description: "Daily engineering tools for design handoff, testing, collaboration, and delivery.", skills: [
    { name: "Git", level: 87 }, { name: "GitHub", level: 88 }, { name: "VS Code", level: 95 }, { name: "Figma", level: 82 }, { name: "Postman", level: 85 }
  ]},
  { title: "Soft Skills", description: "Clear execution across requirements, stakeholders, teams, and delivery pressure.", skills: [
    { name: "Leadership", level: 84 }, { name: "Communication", level: 90 }, { name: "Problem Solving", level: 93 }, { name: "Teamwork", level: 89 }, { name: "Project Management", level: 83 }, { name: "Critical Thinking", level: 92 }
  ]}
];
