import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

function Education() {
  const educations = [
    {
      year: "2021 - 2024",
      degree: "Bachelor of Computer Applications",
      institution: "Mahatma Gandhi Kashi Vidyapeeth",
      location: "Varanasi",
      percentage: "61.9%",
      description: "Comprehensive curriculum covering data structures, algorithms, web development, and software engineering principles."
    },
    {
      year: "2020 - 2021",
      degree: "Intermediate (12th)",
      institution: "UP Board",
      location: "Jaunpur",
      percentage: "65.4%",
      description: "Specialized in Mathematics and Computer Science with focus on programming fundamentals."
    },
    {
      year: "2018 - 2019",
      degree: "High School (10th)",
      institution: "CBSE Board",
      location: "Jaunpur",
      percentage: "55.8%",
      description: "Strong foundation in Science and Mathematics with distinction in core subjects."
    }
  ];

  return (
    <div className="space-y-6">
      {educations.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="glass-card p-5 md:p-6 hover-glow transition-all duration-300 relative overflow-hidden">
            {/* Left Accent Border - Visible on all devices */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-l-2xl" />
            
            {/* Mobile: Horizontal layout for year & badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <GraduationCap size={16} className="text-white" />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  <Calendar size={12} className="text-purple-400" />
                  <span className="text-xs md:text-sm text-purple-300 font-medium">{edu.year}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-purple-500/30">
                <Award size={12} className="text-purple-400" />
                <span className="text-xs font-semibold text-purple-300">{edu.percentage}</span>
              </div>
            </div>
            
            {/* Degree & Institution */}
            <h3 className="text-lg md:text-xl font-bold text-white mb-1 pr-4">{edu.degree}</h3>
            <p className="text-purple-400 text-sm md:text-base font-medium mb-2">{edu.institution}</p>
            
            {/* Location (Optional - adds professional touch) */}
            <div className="flex items-center gap-1 mb-3">
              <MapPin size={12} className="text-gray-500" />
              <span className="text-xs text-gray-500">{edu.location}</span>
            </div>
            
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Education;