import { Database, Layout, Server, Brain, } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCategory {
  name: string;
  icon: JSX.Element;
  skills: { name: string; level: number }[];
}

function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend Development",
      icon: <Layout size={20} />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Angular", level: 80 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      name: "Backend Development",
      icon: <Server size={20} />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 78 },
        { name: "Java", level: 70 },
        { name: "C++", level: 85 }
      ]
    },
    {
      name: "Database & Tools",
      icon: <Database size={20} />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "PostgreSQL", level: 75 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 }
      ]
    },
    {
      name: "Soft Skills",
      icon: <Brain size={20} />,
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 88 },
        { name: "Communication", level: 85 },
        { name: "Leadership", level: 82 }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillCategories.map((category, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="glass-card p-6 hover-glow transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{category.name}</h3>
          </div>
          
          <div className="space-y-4">
            {category.skills.map((skill, skillIdx) => (
              <div key={skillIdx}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm text-gray-300">{skill.name}</span>
                  <span className="text-xs text-purple-400">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: skillIdx * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Skills;