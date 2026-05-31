import { GraduationCap, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

function Education() {
  const educations = [
    {
      year: "2021 - 2024",
      degree: "Bachelor of Computer Applications",
      institution: "Mahatma Gandhi Kashi Vidyapeeth",
      percentage: "61.9%",
      description: "Comprehensive curriculum covering data structures, algorithms, web development, and software engineering principles."
    },
    {
      year: "2020 - 2021",
      degree: "Intermediate (12th)",
      institution: "UP Board",
      percentage: "65.4%",
      description: "Specialized in Mathematics and Computer Science with focus on programming fundamentals."
    },
    {
      year: "2018 - 2019",
      degree: "High School (10th)",
      institution: "CBSE Board",
      percentage: "55.8%",
      description: "Strong foundation in Science and Mathematics with distinction in core subjects."
    }
  ];

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
      
      <div className="space-y-8">
        {educations.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row gap-6 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:flex-row-reverse'}`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg z-10">
              <GraduationCap size={14} className="text-white" />
            </div>
            
            {/* Content */}
            <div className="ml-12 md:ml-0 w-full md:w-1/2">
              <div className="glass-card p-6 hover-glow transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={14} className="text-purple-400" />
                  <span className="text-sm text-purple-300">{edu.year}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-purple-400 text-sm mb-3">{edu.institution}</p>
                
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
                  <Award size={12} className="text-purple-400" />
                  <span className="text-xs text-gray-300">Score: {edu.percentage}</span>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Education;