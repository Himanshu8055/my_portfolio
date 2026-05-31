import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      title: "Full Stack Web Developer",
      company: "I-Planet BPO Pvt. Ltd.",
      period: "July 2025 - Present",
      location: "Mumbai",
      type: "Full-time",
      responsibilities: [
        "Architecting and developing scalable web applications using React.js, Next.js, and Angular",
        "Designing RESTful APIs and managing databases with MySQL and MongoDB",
        "Leading cross-functional collaboration for responsive UI/UX implementation",
        "Optimizing application performance and ensuring 99.9% uptime"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="glass-card p-6 md:p-8 hover-glow transition-all duration-500">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <Briefcase size={16} className="text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                </div>
                <p className="text-purple-400 font-medium">{exp.company}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                  <Calendar size={14} className="text-purple-400" />
                  <span className="text-sm text-gray-300">{exp.period}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                  <MapPin size={14} className="text-purple-400" />
                  <span className="text-sm text-gray-300">{exp.location}</span>
                </div>
              </div>
            </div>
            
            <ul className="space-y-3 pl-4 border-l-2 border-purple-500/30">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-3 group/item">
                  <ArrowRight size={14} className="text-purple-400 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                  <span className="text-gray-300 leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Experience;