import type { LucideIcon } from "lucide-react";
import { Code, Database, Zap, Cpu, Server, Brain } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

function SkillCard({ title, icon: Icon, skills }: SkillCategoryProps) {
  return (
    <div className="group p-6 md:p-8 border border-gray-700/50 hover:border-yellow-600/50 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
        <h3 className="text-lg font-medium text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="text-xs md:text-sm px-3 py-1 bg-yellow-600/10 border border-yellow-600/30 text-yellow-100 rounded-full hover:bg-yellow-600/20 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

const skillCategories: SkillCategoryProps[] = [
  {
    title: "Backend & API Development",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "System Design",
      "Java",
      "JVM",
    ],
  },
  {
    title: "Frontend Technologies",
    icon: Code,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Modern CSS"],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Database Design"],
  },
  {
    title: "DevOps & Tools",
    icon: Zap,
    skills: ["Git", "Docker", "Linux", "AWS", "CI/CD", "REST APIs"],
  },
  {
    title: "Core Computing",
    icon: Cpu,
    skills: ["Data Structures", "Algorithms", "Object-Oriented Design"],
  },
  {
    title: "Soft Skills",
    icon: Brain,
    skills: ["Problem Solving", "Communication", "Mentoring", "Collaboration"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 max-w-6xl mx-auto">
      <div className="space-y-12 md:space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="section-heading">Technical Expertise</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A comprehensive skill set built through hands-on experience in
            system design, API development, and modern web technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, idx) => (
            <SkillCard
              key={idx}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>

        {/* Highlight Stats */}
        <div className="gold-divider pt-12 mt-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-light text-yellow-500">
                5+
              </p>
              <p className="text-gray-400 text-sm">Languages & Frameworks</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-light text-yellow-500">
                10+
              </p>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-light text-yellow-500">
                2+
              </p>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
